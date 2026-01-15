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

async function generateImage() {
  console.log("🎨 Generating new ship fender image...");

  const prompt = `Professional commercial photograph of brand NEW pristine black rubber ship fenders at modern seaport, large cylindrical marine dock fenders with perfect smooth rubber surface, no damage no cracks no rust, clean industrial maritime setting, fenders protecting clean white cargo ship hull, bright daylight, modern port facility, product showcase style photography, high quality 4K, clean and professional`;

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
            const outputPath = path.join(OUTPUT_DIR, "product-ship-fenders.png");
            fs.writeFileSync(outputPath, buffer);
            console.log(`✅ Saved: ${outputPath}`);
            return;
          }
        }
      }
    }
    console.log("⚠️ No image generated");
  } catch (error: any) {
    console.error("❌ Error:", error.message || error);
  }
}

generateImage();
