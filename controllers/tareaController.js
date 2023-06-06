const tareaController = {};
const {Usuario, Tarea_Proyecto, Lista} = require("../models");
const {sendSuccsessResponse, sendErrorResponse} = require("../_util/sendResponse");

//ver tareas como usuario
tareaController.getTareas = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const tarea = await Tarea_Proyecto.findAll({
      where: { id_usuario: usuario.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
        include: {
          model: Lista,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
    });

    if (tarea == 0) {
      return sendErrorResponse(res, 404, "No tienes tareas asignadas");
    } else {
      return sendSuccsessResponse(res, 200, {
        message: "Estas son tus tareas",
        tarea,
      });
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No se encontraron proyectos", error);
  }
};

module.exports = tareaController;
