import { normalizeText } from "../utils/normalize.js";
import { detectIntent } from "../utils/intent.js";
import { searchKnowledgeBase } from "../services/knowledgeSearch.js";
import { aiFallback } from "../services/aiFallback.js";

const MIN_SCORE = 2; // confidence threshold

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message must be a string" });
    }

    /* -------- Normalize & Analyze -------- */
    const normalized = normalizeText(message);
    const words = normalized.split(" ").filter(Boolean);
    const intent = detectIntent(words);

    /* -------- Search Official Knowledge -------- */
    const results = await searchKnowledgeBase(words);

    if (results.length > 0 && results[0].score >= MIN_SCORE) {
      // 🔍 Official data wins
      console.log({
        query: message,
        intent,
        source: results[0].type,
        confidence: results[0].score,
      });

      return res.json({
        reply: results[0].reply,
        source: results[0].type,
        intent,
        confidence: results[0].score,
      });
    }

    /* -------- AI Fallback (ONLY if no official data) -------- */
    const aiReply = await aiFallback(message);

    console.log({
      query: message,
      intent,
      source: "ai",
    });

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
