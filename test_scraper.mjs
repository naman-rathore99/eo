import cheerio from "cheerio";

async function scrapeWebsite(url) {
  try {
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
    const $ = cheerio.load(html);
    $("script, style, noscript, iframe, img, svg, video").remove();
    const cleanText = $("body").text().replace(/\s+/g, " ").trim();
    return cleanText.substring(0, 5000);
  } catch (error) {
    console.error("Scraping Error:", error);
    throw new Error("Could not scrape the provided URL.");
  }
}

scrapeWebsite("https://example.com").then(console.log).catch(console.error);
