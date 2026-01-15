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

async function generateImage(prompt: string, name: string): Promise<boolean> {
  console.log(`Generating: ${name}`);
  console.log(`Prompt: ${prompt}`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: [{ text: `Generate a high quality professional photograph: ${prompt}` }],
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
            console.log(`✓ Saved: ${outputPath}`);
            return true;
          }
        }
      }
    }
    return false;
  } catch (error: any) {
    console.error(`✗ Error:`, error.message || error);
    return false;
  }
}

// Generate new hero image - rubber laboratory
generateImage(
  "Modern rubber compound research laboratory, scientist in white lab coat examining rubber samples, test tubes and beakers with rubber materials, professional R&D facility, clean scientific environment, industrial chemistry lab, high quality photograph, 4K",
  "hero-industrial"
);
