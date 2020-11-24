const express = require("express");
const {
  registerStaff,
  login,
  getMe,
  forgotPassword,
} = require("../controllers/staff");
const { protect } = require("../middleware/staff");
const router = express.Router();
router.post("/register", registerStaff);
router.post("/forgotpassword", forgotPassword);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
