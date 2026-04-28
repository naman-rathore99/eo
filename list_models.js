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

async function listModels() {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error("No API key found in .env or .env.local");
        return;
    }
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await res.json();
    if (data.error) {
        console.error("API Error:", data.error);
        return;
    }
    console.log(JSON.stringify(data.models.map(m => m.name), null, 2));
}

listModels();
