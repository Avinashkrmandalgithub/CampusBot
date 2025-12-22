import dotenv from "dotenv";
dotenv.config();
import faqModel from "../models/FAQ.model.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message must be a string" });
    }

    /* ---------------- NORMALIZE USER MESSAGE ---------------- */
    const normalize = (text) =>
      text
        .toLowerCase()
        .replace(/\bu\b/g, "you")
        .replace(/\bur\b/g, "your")
        .replace(/[^\w\s]/g, "")
        .trim();

    const normalizedMessage = normalize(message);
    const words = normalizedMessage.split(" ");

    /* ---------------- FAQ MATCHING (PRIORITY) ---------------- */
    const faq = await faqModel.findOne({
      $or: [
        { question: { $regex: normalizedMessage, $options: "i" } },
        { tags: { $in: words } },
      ],
    });

    if (faq) {
      return res.json({
        reply: faq.answer,
        source: "faq",
      });
    }

    /* ---------------- GEMINI AI FALLBACK ---------------- */
    const prompt = `
You are CampusBot, an AI helpdesk assistant for Brainware University.

Rules:
- Answer briefly (max 4 lines)
- Use simple Hinglish or English
- Focus on student & staff help only
- Do not explain AI capabilities
- Be polite and clear

User question: ${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let aiReply = response.text || "Sorry, I couldn't understand that.";

    if (aiReply.length > 500) {
      aiReply = aiReply.slice(0, 500) + "...";
    }

    return res.json({
      reply: aiReply,
      source: "CampusBot",
    });
  } catch (error) {
    console.error("Chat Error:", error);
    return res.status(500).json({ error: "AI error" });
  }
};
