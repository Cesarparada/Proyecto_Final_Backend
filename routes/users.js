const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

/* GET users listing. */

//obtener todos los usuarios
router.get("/", verifyToken, isAdmin, userController.getAllUser);

// visualizar el perfil de usuario
router.get("/get-profile", verifyToken, userController.getProfile);

//modificar usuario
router.put("/update-profile", verifyToken, userController.updateProfile);

router.get("/lista-tarea-proyecto/:id", verifyToken, userController.listaTareaProyecto);
module.exports = router;
