import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Server-side Supabase client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Supabase client for storage (using anon key)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

// Allowed file types
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/webp',
  'application/acad', // DWG
  'application/x-acad',
  'application/dwg',
  'image/vnd.dwg',
]

// Max file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024

// Mapovanie typov produktov na slovenské názvy
const productTypeLabels: Record<string, string> = {
  naraznik: 'Nárazníky na lode',
  rohoz: 'Autorohože',
  zasterka: 'Zásterky na nákladné autá',
  tesnenie: 'Tesnenia',
  tlmic: 'Tlmiče vibrácií',
  ine: 'Iné',
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extrakcia dát z formulára
    const company = formData.get('company') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string || null
    const productType = formData.get('productType') as string || null
    const message = formData.get('message') as string
    const gdprConsent = formData.get('gdprConsent') === 'true'

    // Validácia povinných polí
    if (!company || !name || !email || !message) {
      return NextResponse.json(
        { error: 'Vyplňte všetky povinné polia' },
        { status: 400 }
      )
    }

    // Validácia emailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný formát emailu' },
        { status: 400 }
      )
    }

    // Validácia GDPR súhlasu
    if (!gdprConsent) {
      return NextResponse.json(
        { error: 'Pre odoslanie dopytu je potrebný súhlas so spracovaním osobných údajov' },
        { status: 400 }
      )
    }

    let attachmentUrl: string | null = null
    let attachmentName: string | null = null

    // Upload prílohy ak existuje
    const file = formData.get('attachment') as File | null
    if (file && file.size > 0) {
      // Validácia veľkosti súboru
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'Súbor je príliš veľký. Maximálna veľkosť je 10MB.' },
          { status: 400 }
        )
      }

      // Generovanie unikátneho názvu súboru
      const fileExtension = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('attachments')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        // Pokračujeme aj bez prílohy
      } else if (uploadData) {
        const { data: urlData } = supabase.storage
          .from('attachments')
          .getPublicUrl(fileName)
        attachmentUrl = urlData.publicUrl
        attachmentName = file.name
      }
    }

    // Uloženie do databázy
    const { error: dbError } = await supabaseAdmin
      .from('inquiries')
      .insert([{
        company,
        name,
        email,
        phone,
        product_type: productType,
        message,
        gdpr_consent: gdprConsent,
        attachment_url: attachmentUrl,
        attachment_name: attachmentName,
        status: 'new'
      }])

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Chyba pri ukladaní dopytu')
    }

    // Získanie čitateľného názvu typu produktu
    const productTypeLabel = productType ? productTypeLabels[productType] || productType : null

    // Odoslanie emailov (paralelne)
    const emailPromises = []

    // 1. Email notifikácia pre admin (info@rubber24.sk)
    emailPromises.push(
      resend.emails.send({
        from: 'RUBBER 24 <noreply@rubber24.sk>',
        to: process.env.NOTIFICATION_EMAIL!,
        replyTo: email,
        subject: `Nový dopyt od ${company}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fff; padding: 20px; text-align: center; }
              .header h1 { margin: 0; color: #f97316; font-size: 24px; }
              .content { padding: 30px 20px; background: #fff; }
              h2 { color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px; margin-top: 0; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
              .value { margin-top: 5px; font-size: 16px; }
              .message-box { background: #f5f5f5; padding: 15px; border-left: 4px solid #f97316; margin-top: 5px; }
              .attachment { background: #fff3e0; padding: 12px; margin-top: 15px; border: 1px solid #f97316; }
              .footer { margin-top: 30px; padding: 20px; background: #f5f5f5; font-size: 12px; color: #666; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>RUBBER 24</h1>
              </div>
              <div class="content">
                <h2>Nový dopyt z webu</h2>
                
                <div class="field">
                  <div class="label">Firma</div>
                  <div class="value">${company}</div>
                </div>
                
                <div class="field">
                  <div class="label">Kontaktná osoba</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #f97316;">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Telefón</div>
                  <div class="value">${phone || 'Neuvedený'}</div>
                </div>
                
                <div class="field">
                  <div class="label">Typ produktu</div>
                  <div class="value">${productTypeLabel || 'Nešpecifikovaný'}</div>
                </div>
                
                <div class="field">
                  <div class="label">Popis požiadavky</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                ${attachmentUrl ? `
                <div class="attachment">
                  <strong>Príloha:</strong> <a href="${attachmentUrl}" style="color: #f97316;">${attachmentName}</a>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>Pre odpoveď kliknite na "Reply" - email pôjde priamo zákazníkovi.</p>
                <p>Automaticky vygenerované z kontaktného formulára rubber24.sk</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    )

    // 2. Potvrdenie pre zákazníka
    emailPromises.push(
      resend.emails.send({
        from: 'RUBBER 24 <info@rubber24.sk>',
        to: email,
        subject: 'Potvrdenie prijatia vášho dopytu - RUBBER 24',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { background: #000; color: #fff; padding: 30px 20px; text-align: center; }
              .header h1 { margin: 0; color: #f97316; font-size: 28px; letter-spacing: 2px; }
              .content { padding: 40px 30px; background: #fff; }
              .greeting { font-size: 18px; margin-bottom: 20px; }
              .message { background: #f9f9f9; padding: 20px; border-radius: 4px; margin: 25px 0; }
              .highlight { background: #fff3e0; border-left: 4px solid #f97316; padding: 15px 20px; margin: 25px 0; }
              .highlight strong { color: #f97316; }
              .summary { margin: 30px 0; }
              .summary h3 { color: #333; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
              .summary-item { display: flex; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
              .summary-label { color: #666; width: 140px; font-size: 14px; }
              .summary-value { color: #333; flex: 1; font-size: 14px; }
              .contact-box { background: #000; color: #fff; padding: 25px; margin-top: 30px; }
              .contact-box h3 { color: #f97316; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; }
              .contact-box p { margin: 5px 0; font-size: 14px; }
              .contact-box a { color: #f97316; text-decoration: none; }
              .footer { padding: 20px; text-align: center; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>RUBBER 24</h1>
                <p style="margin: 10px 0 0 0; font-size: 12px; color: #ccc;">Výroba gumových výrobkov na mieru</p>
              </div>
              
              <div class="content">
                <p class="greeting">Dobrý deň, <strong>${name}</strong>,</p>
                
                <p>ďakujeme za váš dopyt. Potvrdzujeme, že sme ho úspešne prijali a evidujeme ho v našom systéme.</p>
                
                <div class="highlight">
                  <strong>Čo bude nasledovať?</strong><br>
                  Náš obchodník sa s vami spojí spravidla do <strong>1 pracovného dňa</strong> s návrhom postupu alebo doplňujúcimi otázkami.
                </div>
                
                <div class="summary">
                  <h3>Zhrnutie vášho dopytu</h3>
                  
                  <div class="summary-item">
                    <span class="summary-label">Firma:</span>
                    <span class="summary-value">${company}</span>
                  </div>
                  
                  <div class="summary-item">
                    <span class="summary-label">Kontaktná osoba:</span>
                    <span class="summary-value">${name}</span>
                  </div>
                  
                  <div class="summary-item">
                    <span class="summary-label">Email:</span>
                    <span class="summary-value">${email}</span>
                  </div>
                  
                  ${phone ? `
                  <div class="summary-item">
                    <span class="summary-label">Telefón:</span>
                    <span class="summary-value">${phone}</span>
                  </div>
                  ` : ''}
                  
                  ${productTypeLabel ? `
                  <div class="summary-item">
                    <span class="summary-label">Typ produktu:</span>
                    <span class="summary-value">${productTypeLabel}</span>
                  </div>
                  ` : ''}
                  
                  <div class="summary-item">
                    <span class="summary-label">Vaša správa:</span>
                    <span class="summary-value">${message.length > 100 ? message.substring(0, 100) + '...' : message}</span>
                  </div>
                  
                  ${attachmentName ? `
                  <div class="summary-item">
                    <span class="summary-label">Príloha:</span>
                    <span class="summary-value">${attachmentName}</span>
                  </div>
                  ` : ''}
                </div>
                
                <div class="contact-box">
                  <h3>Kontaktné údaje</h3>
                  <p><strong>RUBBER 24, s.r.o.</strong></p>
                  <p>Remenárska 1220, 956 18 Bošany</p>
                  <p>Tel: <a href="tel:+421917588737">+421 917 588 737</a></p>
                  <p>Email: <a href="mailto:info@rubber24.sk">info@rubber24.sk</a></p>
                  <p style="margin-top: 15px; font-size: 12px; color: #999;">Pracovná doba: Po - Pi, 8:00 - 16:00</p>
                </div>
              </div>
              
              <div class="footer">
                <p>Tento email bol automaticky vygenerovaný. Prosím, neodpovedajte naň priamo.</p>
                <p>Ak máte otázky, kontaktujte nás na <a href="mailto:info@rubber24.sk" style="color: #f97316;">info@rubber24.sk</a></p>
                <p style="margin-top: 15px;">&copy; ${new Date().getFullYear()} RUBBER 24, s.r.o. Všetky práva vyhradené.</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    )

    // Odoslanie emailov (nečakáme na výsledok - dáta sú už uložené)
    try {
      await Promise.all(emailPromises)
    } catch (emailError) {
      // Log email error but don't fail the request - data is already saved
      console.error('Email notification error:', emailError)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Dopyt bol úspešne odoslaný'
    })
    
  } catch (error) {
    console.error('Inquiry error:', error)
    return NextResponse.json(
      { error: 'Chyba pri odosielaní dopytu. Skúste to prosím znova.' },
      { status: 500 }
    )
  }
}
