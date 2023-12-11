// server/routes/auth.route.js
import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';
import cors from 'cors';

const router = express.Router();

// Enable CORS for the auth routes
router.use(cors());

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut);

export default router;
