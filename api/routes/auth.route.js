import express from 'express';
import { SingUp,SingIn } from '../controllers/auth.controller.js';

const router = express.Router();
router.post("/SingUp",SingUp);
router.post("/SingIn",SingIn);

export default router;