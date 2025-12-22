import express from "express";
import {
  addNews,
  getNews,
  updateNews,
  deleteNews,
} from "../controllers/news.controller.js";

const router = express.Router();

router.get("/", getNews);
router.post("/", addNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

export default router;
