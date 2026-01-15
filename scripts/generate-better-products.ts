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

const productImages = [
  {
    name: "product-ship-fenders",
    prompt: "Editorial style photograph of massive black rubber ship fenders at industrial seaport, cylindrical marine fenders protecting steel cargo vessel hull against concrete pier, dramatic golden hour lighting, shallow depth of field focusing on rubber texture, shot by professional industrial photographer with Sony A7R IV, 85mm lens, f/2.8, rich contrast and detail"
  },
  {
    name: "product-car-mats",
    prompt: "High-end automotive product photography of premium black rubber car floor mats, 4-piece set displayed on clean white cyclorama background, mats showing deep textured honeycomb pattern, professional studio lighting with soft shadows, shot for luxury car accessories catalog, clean minimalist commercial photography style, 8K detail"
  },
  {
    name: "product-truck-mudflaps",
    prompt: "Professional automotive photography of heavy-duty black rubber truck mudflap, close-up detail shot showing thick durable rubber material with reinforced mounting, installed on clean commercial truck wheel well, shallow depth of field, industrial strength visible in material texture, commercial vehicle parts catalog style photography"
  },
  {
    name: "product-components",
    prompt: "Professional industrial product photography of precision rubber O-rings and sealing components, various sizes of black rubber gaskets, seals and O-rings neatly arranged in organized rows on neutral light gray background, overhead flat lay composition, soft even studio lighting eliminating harsh shadows, technical parts catalog style, extreme detail and sharpness"
  }
];

async function generateImage(prompt: string, name: string): Promise<boolean> {
  console.log(`\n🎨 Generating: ${name}`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
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
    console.log(`⚠️ No image generated`);
    return false;
  } catch (error: any) {
    console.error(`❌ Error:`, error.message || error);
    return false;
  }
}

async function main() {
  console.log("🚀 Generating improved product images...\n");
  
  for (const product of productImages) {
    await generateImage(product.prompt, product.name);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  console.log("\n✨ Done!");
}

main();
