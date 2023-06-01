const { sendErrorResponse } = require("../_util/sendResponse");
const isUser = async (req, res, next) => {
  const { role_usuario } = req;
  if (role_usuario != "user") {
    return sendErrorResponse(res, 403, "No tiene los permisos necesarios");
  } else next();
};
module.exports = isUser;