import express from 'express';
import { SingUp } from '../controllers/auth.controller.js';

const router = express.Router();
router.post("/SingUp",SingUp);

export default router;