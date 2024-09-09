import express from 'express';
import { accessToken } from '../middleware/auth-middleware.js';
import { authController } from '../controllers/auth-token-controller.js';


const router = express.Router();

router.post("/getAccessToken", accessToken, authController);

export default router;
