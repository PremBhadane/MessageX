import express from "express";
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import {proctectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", proctectRoute, updateProfile);
router.get("/check", proctectRoute, (req, res) => res.send(200).json(req.user));

export default router;