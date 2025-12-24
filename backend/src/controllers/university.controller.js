import UniversityModel from "../models/UniversityInfo.model.js";

//  ADD UNIVERSITY INFO (Admin)
export const addUniversityInfo = async (req, res) => {
  try {
    const { section, title, content, sourceUrl } = req.body;

    if (!section || !title || !content) {
      return res.status(400).json({
        error: "Section, title, and content are required",
      });
    }

    const info = await UniversityModel.create({
      section,
      title,
      content,
      sourceUrl,
    });

    res.status(201).json({
      success: true,
      message: "University information added successfully",
      data: info,
    });
  } catch (error) {
    console.error("Add University Info Error:", error);
    res.status(500).json({ error: "Failed to add university information" });
  }
};

//  GET ALL UNIVERSITY INFO
export const getAllUniversityInfo = async (req, res) => {
  try {
    const info = await UniversityModel.find().sort({ createdAt: -1 });
    res.json({ success: true, data: info });
  } catch (error) {
    console.error("Fetch University Info Error:", error);
    res.status(500).json({ error: "Failed to fetch university information" });
  }
};

//  GET BY SECTION
export const getUniversityInfoBySection = async (req, res) => {
  try {
    const { section } = req.params;

    const info = await UniversityModel.find({ section });

    if (!info.length) {
      return res.status(404).json({
        error: "No data found for this section",
      });
    }

    res.json({ success: true, data: info });
  } catch (error) {
    console.error("Fetch Section Error:", error);
    res.status(500).json({ error: "Failed to fetch section data" });
  }
};

//  UPDATE UNIVERSITY INFO (Admin)

export const updateUniversityInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { section, title, content, sourceUrl } = req.body;

    if (!section || !title || !content) {
      return res.status(400).json({
        error: "Section, title, and content are required",
      });
    }

    const updated = await UniversityModel.findByIdAndUpdate(
      id,
      {
        section,
        title,
        content,
        sourceUrl,
        lastVerifiedAt: new Date(),
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "University info not found" });
    }

    res.json({
      success: true,
      message: "University information updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Update University Info Error:", error);
    res.status(500).json({ error: "Failed to update university information" });
  }
};

//  DELETE UNIVERSITY INFO (Admin)
export const deleteUniversityInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await UniversityModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "University info not found" });
    }

    res.json({
      success: true,
      message: "University information deleted successfully",
    });
  } catch (error) {
    console.error("Delete University Info Error:", error);
    res.status(500).json({ error: "Failed to delete university information" });
  }
};
