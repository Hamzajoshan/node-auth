const express = require("express");
const {
  registerUser,
  login,
  getMe,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");
const router = express.Router();
router.post("/register", registerUser);
router.post("/forgotpassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
