const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const verifyToken = require("../middleware/authMiddleware");

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Protected Route
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

module.exports = router;