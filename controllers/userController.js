const userController = {};
const {
  Usuario,
  Contacto,
  Lista,
  Tarea_Proyecto,
  Proyecto,
} = require("../models");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util.js");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

//controlador para ver todos los usuarios --- COMO ADMIN --
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

//controlador para ver tu perfil de usuario
userController.getProfile = async (req, res) => {
  try {
    const { usuario_id } = req;
    const profile = await Usuario.findOne({
      where: { id: usuario_id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "id_role"],
      },
    });
    sendSuccsessResponse(res, 200, profile);
  } catch (error) {
    sendErrorResponse(res, 404, "Id no existente", error);
  }
};

//controlador para modificar tu perfil
userController.updateProfile = async (req, res) => {
  try {
    const id_usuario = req.usuario_id;
    let newPassword;
    if (req.body.password) {
      newPassword = hash(req.body.password);
    }
    const updateProfile = await Usuario.update(
      {
        ...req.body,
        password: newPassword,
        id_rol: 1,
      },
      { where: { id: id_usuario } }
    );
    if (updateProfile == 1) {
      return sendSuccsessResponse(res, 200, {
        success: true,
        message: "Perfil modificado",
      });
    } else {
      return sendErrorResponse(res, 400, "Usuario no encontrado");
    }
  } catch (error) {
    return sendErrorResponse(res, 500, "Error al actualizar el perfil", error);
  }
};

//controlador para ver todas las listas de tareas de un proyecto con o sin contacto asosiado
userController.listaTareaProyecto = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { id: req.usuario_id },
    });
    const id_proyecto = req.params.id;
    const listas_proyecto = await Tarea_Proyecto.findAll({
      where: { id_usuario: usuario.id, id_proyecto: id_proyecto },
      attributes: {
        exclude: ["createdAt", "updatedAt", "id", "id_usuario", "id_lista"],
      },
      include: {
        model: Lista,
        attributes: {
          exclude: ["createdAt", "updatedAt", "id", "id_contacto"],
        },
        include: {
          model: Contacto,
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
      },
    });

    if (listas_proyecto == 0) {
      return sendErrorResponse(
        res,
        404,
        "Este proyecto no tiene lista de tareas"
      );
    } else {
      return sendSuccsessResponse(res, 200, {
        message: "Estas son las tareas y contactos asignados al proyecto",
        Listas_proyecto: listas_proyecto,
      });
    }
  } catch (error) {
    return sendErrorResponse(
      res,
      500,
      "Error al recuperar lista de tareas",
      error
    );
  }
};

module.exports = userController;
