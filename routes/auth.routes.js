const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller.js");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validation.middleware.js");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;
