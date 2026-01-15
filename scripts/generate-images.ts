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
  console.error("ERROR: GOOGLE_API_KEY not found in .env.local");
  console.log("Current env file path:", envPath);
  console.log("File exists:", fs.existsSync(envPath));
  process.exit(1);
}

console.log("API Key loaded successfully");

// Initialize Google GenAI client
const ai = new GoogleGenAI({ apiKey: API_KEY });

// Output directory
const OUTPUT_DIR = path.join(process.cwd(), "public", "generated");

// Image prompts configuration
const imagePrompts = [
  // Hero section
  {
    name: "hero-industrial",
    prompt:
      "Modern industrial rubber manufacturing facility interior, professional machinery, clean factory floor, warm industrial lighting, high quality photograph, 4K, professional photography",
  },

  // About section - main image
  {
    name: "about-production",
    prompt:
      "Engineer inspecting rubber components in modern factory, quality control process, professional industrial setting, clean workspace, high quality photograph",
  },

  // Product categories
  {
    name: "product-ship-fenders",
    prompt:
      "Large black rubber fenders protecting ship at industrial port dock, maritime equipment, professional photograph, daylight",
  },
  {
    name: "product-car-mats",
    prompt:
      "High quality black rubber car floor mats in luxury vehicle interior, automotive accessory, clean product photography",
  },
  {
    name: "product-truck-mudflaps",
    prompt:
      "Heavy duty black rubber mud flaps on commercial truck, close up detail, industrial vehicle equipment, professional photo",
  },
  {
    name: "product-components",
    prompt:
      "Precision rubber seals, gaskets and O-rings arranged on white background, technical rubber components, product photography, clean studio lighting",
  },

  // Gallery items
  {
    name: "gallery-port-fender",
    prompt:
      "Cylindrical rubber dock fender at commercial port, protecting concrete pier, industrial marine equipment",
  },
  {
    name: "gallery-rubber-mat",
    prompt:
      "Anti-fatigue rubber floor mat in industrial factory setting, worker safety equipment, professional photograph",
  },
  {
    name: "gallery-seals",
    prompt:
      "Close up of precision rubber seals for hydraulic systems, technical engineering components, macro photography",
  },
  {
    name: "gallery-mudflap-detail",
    prompt:
      "Black rubber mudflap texture detail, heavy duty vehicle protection, industrial product close up",
  },
  {
    name: "gallery-vibration-damper",
    prompt:
      "Rubber vibration dampening mounts for industrial machinery, anti-vibration components, technical product photo",
  },
  {
    name: "gallery-rubber-profile",
    prompt:
      "Extruded rubber profiles and weather seals, various shapes, construction materials, product arrangement",
  },
  {
    name: "gallery-floor-covering",
    prompt:
      "Rubber industrial floor tiles in warehouse, durable flooring solution, wide angle interior shot",
  },
  {
    name: "gallery-custom-part",
    prompt:
      "Custom molded rubber component, precision engineering part, technical product on neutral background",
  },
];

// Models to try in order of preference
const MODELS_TO_TRY = [
  "gemini-3-pro-image-preview",  // Nano Banana Pro
  "gemini-2.5-flash-image",
  "gemini-2.0-flash-preview-image-generation",
];

async function generateImage(
  prompt: string,
  name: string,
  modelName: string
): Promise<boolean> {
  console.log(`\nGenerating: ${name}`);
  console.log(`Prompt: ${prompt.substring(0, 50)}...`);
  console.log(`Model: ${modelName}`);

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ text: `Generate a high quality professional photograph: ${prompt}` }],
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    // Check if we have candidates
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          // Check for inline image data
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

    console.error(`✗ No image data in response for ${name}`);
    return false;
  } catch (error: any) {
    const errMsg = error.message || String(error);
    console.error(`✗ Error generating ${name}:`, errMsg.substring(0, 150));
    return false;
  }
}

async function findWorkingModel(): Promise<string | null> {
  console.log("\nTesting available models...");
  
  for (const modelName of MODELS_TO_TRY) {
    console.log(`  Testing: ${modelName}`);
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [{ text: "Generate a simple test image: a blue square on white background" }],
        config: {
          responseModalities: ["TEXT", "IMAGE"],
        },
      });

      if (response.candidates && response.candidates.length > 0) {
        const candidate = response.candidates[0];
        if (candidate.content && candidate.content.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData && part.inlineData.data) {
              console.log(`  ✓ Model ${modelName} works!`);
              return modelName;
            }
          }
        }
      }
      console.log(`  ✗ No image returned`);
    } catch (error: any) {
      const errMsg = error.message || String(error);
      console.log(`  ✗ Error: ${errMsg.substring(0, 80)}`);
    }
  }
  
  return null;
}

async function main() {
  console.log("=".repeat(50));
  console.log("RUBBER 24 - Image Generation Script");
  console.log("=".repeat(50));
  console.log(`\nOutput directory: ${OUTPUT_DIR}`);
  console.log(`Total images to generate: ${imagePrompts.length}`);
  console.log("\n" + "=".repeat(50));

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Find a working model first
  const workingModel = await findWorkingModel();
  
  if (!workingModel) {
    console.error("\n✗ No working image generation model found!");
    console.error("This could be due to:");
    console.error("  - Region restrictions (EMEA countries often blocked)");
    console.error("  - API key doesn't have image generation access");
    console.error("  - Billing not enabled on Google Cloud account");
    console.error("\nPlease check your Google AI Studio or Google Cloud Console settings.");
    process.exit(1);
  }

  console.log(`\nUsing model: ${workingModel}`);
  console.log("=".repeat(50));

  let successCount = 0;
  let failCount = 0;

  for (const item of imagePrompts) {
    const success = await generateImage(item.prompt, item.name, workingModel);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Small delay between requests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("\n" + "=".repeat(50));
  console.log("GENERATION COMPLETE");
  console.log("=".repeat(50));
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`Total: ${imagePrompts.length}`);
}

main().catch(console.error);
