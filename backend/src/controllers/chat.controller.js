import { normalizeText } from "../utils/normalize.js";
import { detectIntent } from "../utils/intent.js";
import { searchKnowledgeBase } from "../services/knowledgeSearch.js";
import { aiFallback } from "../services/aiFallback.js";

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message must be a string" });
    }

    const normalized = normalizeText(message);
    const words = normalized.split(" ");
    const intent = detectIntent(words);

    // 🔍 Search official knowledge
    const results = await searchKnowledgeBase(words);

    if (results.length > 0) {
      return res.json({
        reply: results[0].reply,
        source: results[0].type,
        intent,
      });
    }

    // 🤖 AI fallback ONLY if nothing found
    const aiReply = await aiFallback(message);

    return res.json({
      reply: aiReply,
      source: "ai",
      intent,
    });
  } catch (error) {
    console.error("Chat Error:", error);
    return res.status(500).json({ error: "Chat system error" });
  }
};
