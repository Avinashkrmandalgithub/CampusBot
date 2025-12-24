import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  adminLogin,
  adminMe,
  adminLogout,
} from "../controllers/adminAuth.controller.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/me", adminAuth, adminMe);
router.post("/logout", adminLogout);

export default router;
