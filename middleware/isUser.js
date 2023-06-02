const { sendErrorResponse } = require("../_util/sendResponse");
const isUser = async (req, res, next) => {
  const { usuario_role } = req;
  if (usuario_role != "user") {
    return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
  } else next();
};
module.exports = isUser;