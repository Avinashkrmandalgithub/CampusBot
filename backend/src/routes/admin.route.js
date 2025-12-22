import express from 'express';
import { addFaq, getFaqs } from '../controllers/admin.controller.js';

const router = express.Router();

router.post("/add-faq", addFaq);
router.get("/faqs", getFaqs);




export default router;