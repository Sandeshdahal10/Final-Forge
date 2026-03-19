import express from "express";
import multer from "multer";
import {
  forgotPassword,
  getUser,
  login,
  logout,
  registerUser,
  resetPassword,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/me", getUser);
router.get("/logout", logout);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:token", resetPassword);

export default router;
