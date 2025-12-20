import faqModel from "../models/FAQ.model.js";

export const addFaq = async (req, res) => {
  try {
    const { question, answer, tags } = req.body;

    const faq = await faqModel.create({
      question,
      answer,
      tags,
    });

    res.json({
      message: "FAQ-added",
      faq,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add FAQ",
    });
  }
};
