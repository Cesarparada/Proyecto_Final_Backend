const userController = {};
const { Usuario } = require("../models");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util.js");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

//Ver todos los usuarios
userController.getAllUser = async (req, res) => {
  let { page } = req.query;
  LIMIT = 3;
  try {
    const count = await Usuario.count();
    const pages = getPagesFromCountLimit(count, LIMIT);
    page = normalizePage(page, pages);
    const usuarios = await Usuario.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: { exclude: ["password"] },
    });
    sendSuccsessResponse(res, 200, {
      info: {
        total_results: count,
        limit_results: usuarios.length,
        page: page,
        total_pages: pages,
      },
      results: usuarios,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Error al recuperar los usuarios", error);
  }
};

//ver los perfiles de usuarios
userController.getProfile = async (req, res) =>{
    try {
      const {usuario_id} = req
     const profile = await Usuario.findOne({where : {id : usuario_id}, attributes: {exclude:["password","createdAt","updatedAt","id_role"]}})
     sendSuccsessResponse(res, 200, profile)
    } catch (error) {
     sendErrorResponse(res, 404, "Id no existente", error)
    }
   };

module.exports = userController;
