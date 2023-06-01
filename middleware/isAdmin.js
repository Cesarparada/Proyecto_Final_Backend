const { sendErrorResponse } = require("../_util/sendResponse");
const isAdmin = (req, res, next) => {
  const { role_usuario } = req;
  if (role_usuario != "admin") {
    return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
  } else next();
};
module.exports = isAdmin;