const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isUser = require("../middleware/isUser");
const proyectoController = require("../controllers/proyectoControllers")

//ver citas como cliente
router.get("/proyecto", verifyToken, isUser, proyectoController.getProyectos);

module.exports = router;