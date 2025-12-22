import express from 'express';
import { addFaq, deleteFaq, getFaqs, updateFaq } from '../controllers/admin.controller.js';

const router = express.Router();

router.post("/add-faq", addFaq);
router.get("/faqs", getFaqs);
router.put("/update-faq/:id", updateFaq);   
router.delete("/delete-faq/:id", deleteFaq); 




export default router;