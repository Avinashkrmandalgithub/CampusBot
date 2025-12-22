import faqModel from "../models/FAQ.model.js";

export const addFaq = async (req, res) => {
  try {
    const { question, answer, category, tags } = req.body;

    if (!question || !answer || !category) {
      return res.status(400).json({
        error: "Question, answer and category are required",
      });
    }

    const faq = await faqModel.create({
      question,
      answer,
      category,
      tags,
    });

    res.status(201).json({
      message: "FAQ added successfully",
      faq,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to add FAQ",
    });
  }
};

export const getFaqs = async (req, res) => {
  try {
    const faqs = await faqModel.find().sort({ createdAt: -1 });

    res.json(faqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
};
