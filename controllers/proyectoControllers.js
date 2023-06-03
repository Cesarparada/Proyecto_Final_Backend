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
  } catch (error) {
    return sendErrorResponse(
      res,
      500,
      "No se puede modificar el proyecto",
      error
    );
  }
};
module.exports = proyectoController;
