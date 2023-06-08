const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isUser = require("../middleware/isUser");
const proyectoController = require("../controllers/proyectoControllers")

//crear proyectos
router.post("/create-proyecto", verifyToken, isUser, proyectoController.createProyecto);

//ver proyectos como usuario
router.get("/proyecto", verifyToken, isUser, proyectoController.getProyectos);

//modificar proyectos
router.put("/update-proyectos/:id", verifyToken, isUser, proyectoController.updateProyecto);

//eliminar proyectos
router.delete("/delete-proyectos/:id", verifyToken, isUser, proyectoController.deleteProyecto);

module.exports = router;