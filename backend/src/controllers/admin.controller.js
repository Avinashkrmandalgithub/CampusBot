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

export const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer, category, tags } = req.body;

    if (!question || !answer || !category) {
      return res.status(400).json({
        error: "Question, answer and category are required",
      });
    }

    const faq = await faqModel.findByIdAndUpdate(
      id,
      { question, answer, category, tags },
      { new: true }
    );

    if (!faq) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    res.json({ message: "FAQ updated", faq });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update FAQ" });
  }
};

export const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await faqModel.findByIdAndDelete(id);

    if (!faq) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    res.json({ message: "FAQ deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete FAQ" });
  }
};
