const authController = {};
const { Usuario, Role } = require("../models");
const bcrypt = require("bcrypt");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const { compareHash } = require("../_util/hash");
const { generateToken } = require("../_util/token");


// controlador de login
authController.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return sendErrorResponse(
      res,
      400,
      "Debe completar los campos requeridos correctamente"
    );
  }
  try {
    const usuario = await Usuario.findOne({
      where: { email: email },
      include: [{ model: Role }],
    });
    if (!usuario) {
      return sendErrorResponse(res, 404, "Email o contraseña incorrecta");
    }
    const isValidPassword = compareHash(password, usuario.password);
    if (!isValidPassword) {
      return sendErrorResponse(res, 401, "Email o contraseña incorrecta");
    }
    const token = generateToken({
      usuario_id: usuario.id,
      usuario_role: usuario.Role.role_usuario,
      usuario_name: usuario.nombre,
    });

    sendSuccsessResponse(res, 200, {
      message: "Inicio de sesión de usuario exitoso",
      token: token,
      role: usuario.Role.role_usuario,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Inicio de sesión de usuario fallido", error);
  }
};

//registro de usuarios
authController.register = async (req, res) => {
    try {
      const {
        nombre,
        apellidos,
        fecha_de_nacimiento,
        email,
        password,
      } = req.body;
  
      const encryptedPassword = bcrypt.hashSync(password, 10);
  
      const nuevoUsuario = await Usuario.create({
          nombre: nombre,
          apellidos: apellidos,
          fecha_de_nacimiento: fecha_de_nacimiento,
          email: email,
          password: encryptedPassword,
          id_role: 1,
      });
      return sendSuccsessResponse(res, 200, {
        message: "Usuario creado correctamente",
      });
    } catch (error) {
      return sendErrorResponse(res, 500, "Algo salió mal", error);
    }
  };
  

module.exports = authController;
