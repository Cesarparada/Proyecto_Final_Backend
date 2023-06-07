const proyectoController = {};
const {
  Usuario,
  Proyecto,
  Usuario_Proyecto,
  Tarea_Proyecto,
  Lista,
} = require("../models");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

// crear proyectos como usuario
proyectoController.createProyecto = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });
    const { titulo, descripcion } = req.body;
    const nuevoProyecto = await Proyecto.create({
      titulo: titulo,
      descripcion: descripcion,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const usuario_proyecto = await Usuario_Proyecto.create({
      id_proyecto: nuevoProyecto.id,
      id_usuario: usuario.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return sendSuccsessResponse(res, 200, {
      message: "Proyecto creado",
      nuevoProyecto,
    });
  } catch (error) {
    return sendErrorResponse(res, 500, "No se puede crear el proyecto", error);
  }
};

// ver proyectos como usuario
proyectoController.getProyectos = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const proyecto = await Usuario_Proyecto.findAll({
      where: { id_usuario: usuario.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Proyecto,
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

// modificar proyecto como usuario
proyectoController.updateProyecto = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });

    const id_proyecto = req.params.id;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;

    const usuario_proyecto = await Usuario_Proyecto.findOne({
      where: { id_usuario: usuario.id, id_proyecto: id_proyecto },
    });
    if (usuario_proyecto) {
      const updateProyecto = await Proyecto.update(
        { titulo: titulo, descripcion: descripcion },
        { where: { id: id_proyecto } }
      );
      if (updateProyecto == 1) {
        return sendSuccsessResponse(res, 200, {
          message: "proyecto modificado",
          updateProyecto,
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
    return sendErrorResponse(
      res,
      500,
      "No se puede modificar el proyecto",
      error
    );
  }
};

//Eliminar proyectos como usuario
proyectoController.deleteProyecto = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });
    const id_usuario = usuario.id;
    const id_proyecto = req.params.id;

    const tarea_proyecto = await Tarea_Proyecto.findOne({
      where: { id_proyecto: id_proyecto, id_usuario: id_usuario },
    });
    const usuario_proyecto = await Usuario_Proyecto.findOne({
      where: { id_proyecto: id_proyecto, id_usuario: id_usuario },
    });

    if (tarea_proyecto && usuario_proyecto) {
      const deleteTareaProyecto = await Tarea_Proyecto.destroy({
        where: { id_proyecto: id_proyecto, id_usuario: id_usuario },
      });

      if (deleteTareaProyecto == 1) {
        await Tarea_Proyecto.destroy({
          where: { id_proyecto: id_proyecto },
        });

        const deleteUsuarioProyecto = await Usuario_Proyecto.destroy({
          where: { id_proyecto: id_proyecto },
        });

        const deleteProyecto = await Proyecto.destroy({
          where: { id: id_proyecto },
        });
        const deleteLista = await Lista.destroy({
          where: { id: tarea_proyecto.id },
        });
        return sendSuccsessResponse(res, 200, {
          message: "Proyecto eliminado",
        });
      }
    } else if (!tarea_proyecto && usuario_proyecto) {
      const deleteUsuarioProyecto = await Usuario_Proyecto.destroy({
        where: { id_proyecto: id_proyecto },
      });

      const deleteProyecto = await Proyecto.destroy({
        where: { id: id_proyecto },
      });

      return sendSuccsessResponse(res, 200, {
        message: "Proyecto eliminado",
      });
    } else {
      sendErrorResponse(
        res,
        400,
        `No se puede eliminar el proyecto, no tienes los permisos necesarios`,
        tarea_proyecto
      );
    }
  } catch (error) {
    return sendErrorResponse(
      res,
      500,
      "No se puede eliminar el proyecto",
      error
    );
  }
};
module.exports = proyectoController;
