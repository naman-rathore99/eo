const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

function getApiKey() {
    try {
        const envContent = fs.readFileSync('.env', 'utf8');
        const match = envContent.match(/GEMINI_API_KEY=([^\s]+)/);
        if (match) return match[1];
    } catch (e) {
        try {
            const envContent = fs.readFileSync('.env.local', 'utf8');
            const match = envContent.match(/GEMINI_API_KEY=([^\s]+)/);
            if (match) return match[1];
        } catch (e2) {
            return null;
        }
    }
    return null;
}

const apiKey = getApiKey();
const genAI = new GoogleGenerativeAI(apiKey);

const modelsToTest = [
  "gemini-2.5-flash",
  "gemini-2.0-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
  "gemini-3-flash-preview",
  "gemini-3.1-flash-lite-preview"
];

async function testModels() {
    for (const modelName of modelsToTest) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Say 'hello' in one word.");
            console.log(`[SUCCESS] ${modelName}:`, result.response.text().trim());
            break; // Stop at first success
        } catch (e) {
            console.log(`[FAILED] ${modelName}: ${e.message.split('\n')[0]}`);
        }
    }
}

testModels();
