import * as cheerio from "cheerio";

export async function scrapeWebsite(url: string) {
  try {
    // 1. Fetch the raw HTML from the target URL
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();

    // 2. Load the HTML into Cheerio (our lightweight parser)
    const $ = cheerio.load(html);

    // 3. Strip out the junk we don't want the AI to read
    $("script, style, noscript, iframe, img, svg, video").remove();

    // 4. Extract the clean text from the body
    const cleanText = $("body").text().replace(/\s+/g, " ").trim();

    // 5. Limit the text to roughly 5,000 characters to save AI tokens and prevent errors
    return cleanText.substring(0, 5000);
  } catch (error) {
    console.error("Scraping Error:", error);
    throw new Error("Could not scrape the provided URL.");
  }
}
