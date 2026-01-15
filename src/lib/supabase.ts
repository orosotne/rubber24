import { createClient } from '@supabase/supabase-js'

// Database types
export interface Inquiry {
  id?: string
  created_at?: string
  company: string
  name: string
  email: string
  phone?: string | null
  product_type?: string | null
  message: string
  attachment_url?: string | null
  attachment_name?: string | null
  gdpr_consent: boolean
  status?: string
}

// Client-side klient (pre storage upload)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Server-side klient (pre API routes s admin právami)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
