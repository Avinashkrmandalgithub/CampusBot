import express from 'express';
import { addFaq } from '../controllers/admin.controller.js';

const router = express.Router();

router.post("/add-faq", addFaq);



export default router;