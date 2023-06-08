const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isUser = require("../middleware/isUser");
const tareaController = require("../controllers/tareaController")

//ver proyectos como usuario
router.get("/tarea", verifyToken, isUser, tareaController.getTareas);

//Crear tareas
router.post("/crate-tarea/:id", verifyToken, isUser, tareaController.createTarea);

//modificar tareas
router.put("/update-tareas/:id", verifyToken, isUser, tareaController.updateTarea);

//eliminar tareas
router.delete("/delete-tareas/:id", verifyToken, isUser, tareaController.deleteTarea);

module.exports = router
