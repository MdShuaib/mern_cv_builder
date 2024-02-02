import express from 'express';
import {
  login,
  signup,
  verify
} from '../controllers/authController.js';
import { signupValidate } from '../middleware/bodyValidate.js';

const router = express.Router();

router.post('/signup', signupValidate, signup);
router.get('/verify', verify);
router.post('/login', login);

export default router;
