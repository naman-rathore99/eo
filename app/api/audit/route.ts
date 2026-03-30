import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { scrapeWebsite } from "@/lib/scraper";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    // 1. Receive the URL and Context from your frontend dashboard
    const { url, context } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // 2. Run the scraper to get the website text
    const scrapedContent = await scrapeWebsite(url);

    // 3. Set up the AI model (using the fast and capable Flash model)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: { responseMimeType: "application/json" }, // Force JSON output
    });

    // 4. The SINGLE Master Prompt (Combines Title, Meta, Keywords, and Schema)
    const masterPrompt = `
      You are an expert, high-end SEO specialist and technical developer. Analyze the webpage and generate the perfect Title Tag, Meta Description, Keywords, and JSON-LD Schema Markup.
      
      Target URL: ${url}
      User Context/Keywords: ${context || "None provided by user."}
      
      Scraped Webpage Content:
      "${scrapedContent}"
      
      Instructions:
      - Title Tag: Create an SEO-optimized Title Tag (maximum 60 characters).
      - Meta Description: Create a compelling Meta Description designed for high click-through rates (maximum 160 characters).
      - Keywords: Identify 5 to 8 highly relevant, long-tail search queries that this page should try to rank for.
      - Schema Markup: Generate the most appropriate JSON-LD schema (e.g., LocalBusiness, TravelAgency, Article, FAQPage, or Product) based on the content. Return it as a perfectly formatted, minified string. Do NOT include the <script> tags, just the JSON object.
      
      Return ONLY a valid JSON object with this exact structure:
      {
        "titleTag": "Your optimized title here",
        "metaDescription": "Your optimized description here",
        "suggestedKeywords": ["keyword phrase 1", "keyword phrase 2", "keyword phrase 3"],
        "schemaMarkup": "{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebSite\\",\\"name\\":\\"Example\\"}"
      }
    `;

    // 5. Generate the content and parse the JSON (Using the new masterPrompt)
    const result = await model.generateContent(masterPrompt);
    const responseText = result.response.text();
    const seoData = JSON.parse(responseText);

    // 6. Send the data back to the frontend
    return NextResponse.json(seoData);
  } catch (error) {
    console.error("Audit API Error:", error);
    return NextResponse.json(
      { error: "Failed to process the SEO audit." },
      { status: 500 },
    );
  }
}
