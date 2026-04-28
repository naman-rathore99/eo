const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

function getApiKey() {
    try {
        const envContent = fs.readFileSync('.env', 'utf8');
        const match = envContent.match(/GEMINI_API_KEY=([^\s]+)/);
        if (match) return match[1];
    } catch (e) {
        return null;
    }
    return null;
}

const apiKey = getApiKey();
const genAI = new GoogleGenerativeAI(apiKey);

async function testJson() {
    try {
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            generationConfig: { responseMimeType: "application/json" }
        });
        const result = await model.generateContent("Return a JSON with key 'hello' and value 'world'.");
        console.log(`[SUCCESS]`, result.response.text().trim());
    } catch (e) {
        console.log(`[FAILED]`, e);
    }
}

testJson();
