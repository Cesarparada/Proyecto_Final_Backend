const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

/* GET users listing. */

//obtener todos los usuarios
router.get("/", verifyToken, isAdmin, userController.getAllUser);

module.exports = router;
