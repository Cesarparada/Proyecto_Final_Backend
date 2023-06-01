const { getTokenFromHeader, decodedToken } = require("../_util/token");
const { sendErrorResponse } = require("../_util/sendResponse");

//Funcion para verificar en token
const verifyToken = (req, res, next) => {
  const token = getTokenFromHeader(req.headers);
  if (!token) {
    return sendErrorResponse(res, 401, "No se encontró ningún token de autorización");
  }
  try {
    const decoded = decodedToken(token);
    console.log(decoded)
    req.id_usuario = decoded.id_usuario;
    req.role_usuario = decoded.role_usuario;
    next();
  } catch (error) {
    sendErrorResponse(res, 400, "Token invalido", error);
  }
};
module.exports = verifyToken;