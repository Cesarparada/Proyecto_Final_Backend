const proyectoController = {};
const { Usuario, Proyecto, Usuario_Proyecto } = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

// ver proyectos como usuario

proyectoController.getProyectos = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
      // attributes: { exclude: ["createAt", "updateAr"] },
    })
    
    const proyecto = await Usuario_Proyecto.findAll({
      where: { id_usuario: usuario.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: { 
        model:Proyecto,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
       },
      
      },
      
    });

    if (proyecto == 0) {
      return sendErrorResponse(res, 404, "No tiene Proyectos");
    } else {
      return sendSuccsessResponse(res, 200, {
        message: "Estos son sus proyectos",
        proyecto: proyecto,
      });
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No se encontraron proyectos", error);
  }
};

module.exports = proyectoController;
