const express = require("express");
const router = express.Router();
const authRouter = require('./routes/auth');
const usuariosRouter = require("./routes/users");
const proyectoRouter = require ("./routes/proyectos");

//Ruta para registrarse y login
router.use("/auth", authRouter);

//Ruta para realizar funciones como Usuario
router.use("/usuarios", usuariosRouter);

//Ruta para ver proyectos como usuario

router.use ("/proyectos", proyectoRouter);

module.exports = router;