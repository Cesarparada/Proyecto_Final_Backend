const express = require("express");
const router = express.Router();
const authRouter = require('./routes/auth');
const usuariosRouter = require("./routes/users");

//Ruta para registrarse y login
router.use("/auth", authRouter);

//Ruta para realizar funciones como Usuario
router.use("/usuarios", usuariosRouter);

module.exports = router;