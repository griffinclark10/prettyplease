import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/userControllers.js';

router.post('/', createUser);

export default router;