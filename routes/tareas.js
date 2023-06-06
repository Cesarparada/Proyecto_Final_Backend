const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isUser = require("../middleware/isUser");
const tareaController = require("../controllers/tareaController")

//ver proyectos como usuario
router.get("/tarea", verifyToken, isUser, tareaController.getTareas);

//Crear tareas
router.post("/cratetarea/:id", verifyToken, isUser, tareaController.createTarea);

//modificar tareas
router.put("/updatetareas/:id", verifyToken, isUser, tareaController.updateTarea);

module.exports = router
