import newsModel from "../models/News.model.js";

export const addNews = async (req, res) => {
  try {
    const { title, desc, category, date, highlight } = req.body;

    if (!title || !desc || !category || !date) {
      return res.status(400).json({
        error: "Title, description, category and date are required",
      });
    }

    const news = await newsModel.create({
      title,
      desc,
      category,
      date,
      highlight,
    });

    res.status(201).json({
      message: "News published successfully",
      news,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add news" });
  }
};

export const getNews = async (req, res) => {
  try {
    const news = await newsModel.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, category, date, highlight } = req.body;

    if (!title || !desc || !category || !date) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const news = await newsModel.findByIdAndUpdate(
      id,
      { title, desc, category, date, highlight },
      { new: true }
    );

    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }

    res.json({ message: "News updated successfully", news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update news" });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await newsModel.findByIdAndDelete(id);

    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete news" });
  }
};
