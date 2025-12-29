import { normalizeText } from "../utils/normalize.js";
import { detectIntent } from "../utils/intent.js";
import { searchKnowledgeBase } from "../services/knowledgeSearch.js";
import { aiFallback } from "../services/aiFallback.js";

const MIN_SCORE = 5; // stricter confidence

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message must be a string" });
    }

    const normalized = normalizeText(message);
    const words = normalized.split(" ").filter(Boolean);
    const intent = detectIntent(words);

     console.log("🔎 Chat received:", {
      raw: message,
      normalized,
      words,
      intent,
    });

    const results = await searchKnowledgeBase(words, intent);

    

    if (results.length && results[0].score >= MIN_SCORE) {
      return res.json({
        reply: results[0].reply,
        source: results[0].type,
        intent,
        confidence: results[0].score,
      });
    }

    // AI ONLY if no official data
    const aiReply = await aiFallback(message);

    return res.json({
      reply: aiReply,
      source: "ai",
      intent,
      disclaimer: "AI-generated response. Not official university data.",
    });
  } catch (error) {
    console.error("Chat Error:", error);
    return res.status(500).json({ error: "Chat system error" });
  }
};
