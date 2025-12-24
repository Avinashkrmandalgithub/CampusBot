import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const aiFallback = async (question) => {
  const prompt = `
You are CampusBot, an AI helpdesk assistant for Brainware University.

Rules:
- Answer briefly (max 4 lines)
- Use simple Hinglish or English
- If official data is not available, clearly say so
- Do NOT guess dates or rules

User question: ${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text || "I do not have official information on this topic.";
};
