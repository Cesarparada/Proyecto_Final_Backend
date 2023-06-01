const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


/* GET users listing. */

//login de usuarios
router.post("/login", authController.login);

//registar usuario
router.post("/register", authController.register);


module.exports = router;
