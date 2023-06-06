const tareaController = {};
const {Usuario, Tarea_Proyecto, Lista} = require("../models");
const {sendSuccsessResponse, sendErrorResponse} = require("../_util/sendResponse");

// crear tareas como usuario
tareaController.createTarea = async (req, res) => {
    try {
      const usuario = await Usuario.findOne({
        where: { id: req.usuario_id },
      });
      const { titulo, descripcion, tarea,  } = req.body;
      const nuevaTarea = await Lista.create({
        titulo: titulo,
        descripcion: descripcion,
        tarea: tarea,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const id_proyecto= req.params.id;
      const tarea_proyecto = await Tarea_Proyecto.create({
        id_lista: nuevaTarea.id,
        id_usuario: usuario.id,
        id_proyecto: id_proyecto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
  
      return sendSuccsessResponse(res, 200, {
        message: "tarea creada",
        nuevaTarea,
      });
    } catch (error) {
      return sendErrorResponse(res, 500, "No se puede crear la tarea", error);
    }
  };

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
