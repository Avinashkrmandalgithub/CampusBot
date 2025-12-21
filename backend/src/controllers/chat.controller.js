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

    // Normalize numeric queries
    const cleanMessage = message.replace(/\d+/g, "").trim();
    const regex = new RegExp(cleanMessage, "i");

    const faq = await faqModel.findOne({ question: regex });

    if (faq) {
      return res.json({
        reply: faq.answer,
        source: "faq",
      });
    }

    // Gemini AI fallback
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

    let aiReply = response.text;

    if (aiReply.length > 500) {
      aiReply = aiReply.slice(0, 500) + "...";
    }

    res.json({
      reply: aiReply,
      source: "CampusBot",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
};
