const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// 1. Auth Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

//2 forget password authRoutes
router.post("/forgot-password", authController.forgotPassword);

// 3. Password Reset Routes
router.post("/request-reset-password", authController.requestResetPassword);
router.get("/validate-reset-token",  authController.validateResetToken);
router.post("/reset-password",  authController.resetPassword);

// 4. CRUD Routes
router.get("/user/:id", authController.getUserById);
router.post("/create", authController.createUser);
router.put("/update/:id", authController.updateUser);
router.delete("/delete/:id", authController.deleteUser);

module.exports = router;
