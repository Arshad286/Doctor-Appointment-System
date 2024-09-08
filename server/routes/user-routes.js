import express from 'express';
import { loginController, SignupController } from '../controllers/user-controller.js';

const router = express.Router();

router.post('/login', loginController);
router.post('/signup', SignupController);

export default router;
