import express from 'express';
import { adminAuth } from '../middleware/adminAuth.js';
import { addFaq, deleteFaq, getFaqs, updateFaq } from '../controllers/admin.controller.js';

const router = express.Router();

router.use(adminAuth); 

router.post("/add-faq", addFaq);
router.get("/faqs", getFaqs);
router.put("/update-faq/:id", updateFaq);   
router.delete("/delete-faq/:id", deleteFaq); 




export default router;