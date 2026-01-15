import * as fs from "fs";
import * as path from "path";
import { GoogleGenAI } from "@google/genai";

// Load environment variables manually from .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...valueParts] = trimmed.split("=");
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join("=").trim();
      }
    }
  });
}

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error("ERROR: GOOGLE_API_KEY not found");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUTPUT_DIR = path.join(process.cwd(), "public", "generated");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

interface ProductImage {
  name: string;
  prompt: string;
}

const productImages: ProductImage[] = [
  {
    name: "product-ship-fenders",
    prompt: "Professional product photography of large black rubber ship fenders and dock bumpers at a commercial port, massive cylindrical rubber fenders protecting ship hull against concrete dock, industrial maritime setting, golden hour lighting, sharp focus on rubber texture, editorial style photograph by professional industrial photographer, 4K, high detail"
  },
  {
    name: "product-car-mats",
    prompt: "Professional studio product photography of premium black rubber car floor mats, set of 4 pieces arranged elegantly on white background, deep rubber texture with honeycomb pattern, clean edges, soft studio lighting with subtle shadows, commercial advertising style, automotive accessories catalog photo, 4K ultra sharp"
  },
  {
    name: "product-truck-mudflaps",
    prompt: "Professional product photograph of heavy-duty black rubber truck mudflaps, close-up detail shot showing thick rubber material and mounting holes, installed on clean truck rear wheel, industrial transportation product, professional automotive photography with dramatic lighting, commercial catalog style, 4K sharp detail"
  },
  {
    name: "product-components",
    prompt: "Professional studio product photography of precision rubber O-rings and seals collection, various sizes of black and red rubber gaskets and sealing rings arranged in organized pattern on neutral gray background, macro detail showing smooth rubber surface, industrial components catalog style, soft even studio lighting, 4K ultra detailed"
  }
];

async function generateImage(prompt: string, name: string): Promise<boolean> {
  console.log(`\n🎨 Generating: ${name}`);
  console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [{ text: prompt }],
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            const buffer = Buffer.from(part.inlineData.data, "base64");
            const outputPath = path.join(OUTPUT_DIR, `${name}.png`);
            fs.writeFileSync(outputPath, buffer);
            console.log(`✅ Saved: ${outputPath}`);
            return true;
          }
        }
      }
    }
    console.log(`⚠️ No image generated for ${name}`);
    return false;
  } catch (error: any) {
    console.error(`❌ Error generating ${name}:`, error.message || error);
    return false;
  }
}

async function generateAllProducts() {
  console.log("🚀 Starting product image generation...\n");
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  
  let successCount = 0;
  
  for (const product of productImages) {
    const success = await generateImage(product.prompt, product.name);
    if (success) successCount++;
    
    // Wait between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`\n✨ Generation complete! ${successCount}/${productImages.length} images created.`);
}

generateAllProducts();
