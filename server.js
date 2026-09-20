const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY not found!");
    process.exit(1);
}

app.post("/ask", async (req, res) => {
    try {
        const message = req.body.message;

        if (!message) {
            return res.json({
                reply: "I didn't hear anything, Sir."
            });
        }

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": API_KEY
                },
                body: JSON.stringify({
                    systemInstruction: {
                        parts: [{
                            text: `You are JARVIS, a futuristic personal AI assistant.
Your user is Aqib.
Speak naturally, intelligently and concisely.
Call the user Sir when appropriate.
Do not repeatedly say that you are an AI.
Act like a helpful personal assistant.
If the user asks a normal question, answer directly.
Keep voice responses reasonably short unless the user asks for detail.`
                        }]
                    },
                    contents: [
                        {
                            role: "user",
                            parts: [
                                { text: message }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini Error:", data);
            return res.status(500).json({
                reply: "Sir, I am having trouble connecting to my AI core."
            });
        }

        const reply =
            data.candidates?.[0]?.content?.parts
                ?.map(part => part.text || "")
                .join("") ||
            "Sir, I couldn't generate a response.";

        res.json({ reply });

    } catch (error) {
        console.error("Server Error:", error);

        res.status(500).json({
            reply: "Sir, my AI core is currently unavailable."
        });
    }
});

app.get("/", (req, res) => {
    res.send("JARVIS AI Core ONLINE");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("================================");
    console.log("      JARVIS AI CORE ONLINE");
    console.log(`      Port: ${PORT}`);
    console.log("      Gemini Connected");
    console.log("================================");
});
