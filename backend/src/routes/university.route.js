import express from "express";
import {
  addUniversityInfo,
  getAllUniversityInfo,
  getUniversityInfoBySection,
  updateUniversityInfo,
  deleteUniversityInfo,
} from "../controllers/university.controller.js";

const router = express.Router();

router.post("/", addUniversityInfo);
router.get("/", getAllUniversityInfo);
router.get("/:section", getUniversityInfoBySection);
router.put("/:id", updateUniversityInfo);
router.delete("/:id", deleteUniversityInfo);

export default router;
