const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAdmin = require("../middleware/isAdmin");
const verifyToken = require("../middleware/verifyToken");

/* GET users listing. */

//login de usuarios
router.post("/login", authController.login);

module.exports = router;
