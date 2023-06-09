const tareaController = {};
const {
  Usuario,
  Tarea_Proyecto,
  Lista,
  Usuario_Proyecto,
} = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

// constrolador para crear tareas dentro de tu proyecto
tareaController.createTarea = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const id_proyecto = req.params.id;
    const usarioProyecto = await Usuario_Proyecto.findOne({
      where: { id_usuario: usuario.id, id_proyecto: id_proyecto },
    });
    if (usarioProyecto) {
      const { titulo, descripcion, tarea, id_contacto } = req.body;
      const nuevaTarea = await Lista.create({
        where: { id_creador: usuario.id },
        id_creador: usuario.id,
        id_contacto: id_contacto,
        titulo: titulo,
        descripcion: descripcion,
        tarea: tarea,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const tarea_proyecto = await Tarea_Proyecto.create({
        id_lista: nuevaTarea.id,
        id_usuario: usuario.id,
        id_proyecto: id_proyecto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return sendSuccsessResponse(res, 200, {
        message: "tarea creada",
        nueva_tarea: nuevaTarea,
      });
    } else {
      return sendErrorResponse(res, 403, "No tiene los permisos necesario");
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede crear la tarea", error);
  }
};

//controlador para ver mis tareas asignadas
tareaController.getTareas = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const tarea = await Lista.findAll({
      where: { id_contacto: usuario.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
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

// controlador para modificar tareas dentro de tu proyecto
tareaController.updateTarea = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });
    const id_lista = req.params.id;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const tarea = req.body.tarea;
    const tarea_proyecto = await Tarea_Proyecto.findOne({
      where: { id_usuario: usuario.id, id_lista: id_lista },
    });
    if (tarea_proyecto) {
      const updateLista = await Lista.update(
        { titulo: titulo, descripcion: descripcion, tarea: tarea },
        { where: { id: id_lista } }
      );
      if (updateLista == 1) {
        return sendSuccsessResponse(res, 200, {
          message: "Lista modificado",
        });
      } else {
        return sendErrorResponse(
          res,
          404,
          "Debe completar correctamente los campos requeridos"
        );
      }
    } else {
      return sendErrorResponse(
        res,
        403,
        "No tienes los permisos para modificar"
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puedo modificar la tarea", error);
  }
};

// controlador para eliminar tarea dentro de mi proyecto
tareaController.deleteTarea = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const id_usuario = usuario.id;
    const id_lista = req.params.id;

    const tarea_proyecto = await Tarea_Proyecto.findOne({
      where: { id_lista: id_lista, id_usuario: id_usuario },
    });

    if (tarea_proyecto) {
      const deleteTareaProyecto = await Tarea_Proyecto.destroy({
        where: { id_lista: id_lista, id_usuario: id_usuario },
      });

      if (deleteTareaProyecto == 1) {
        const deleteProyecto = await Lista.destroy({
          where: { id: id_lista },
        });
        return sendSuccsessResponse(res, 200, {
          message: "Listas eliminada",
        });
      }
    } else {
      sendErrorResponse(
        res,
        400,
        `No se puede eliminar la lista, No tienes el permiso necesario`,
        tarea_proyecto
      );
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede eliminar la lista", error);
  }
};
module.exports = tareaController;
