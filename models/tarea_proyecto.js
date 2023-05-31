"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tarea_Proyecto extends Model {
    static associate(models) {
      Tarea_Proyecto.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
      });
      Tarea_Proyecto.belongsTo(models.Proyecto, {
        foreignKey: "id_proyecto",
      });
      Tarea_Proyecto.belongsTo(models.Lista, {
        foreignKey: "id_lista",
      });
    }
  }
  Tarea_Proyecto.init(
    {
      id_lista: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tarea_Proyecto",
      tableName: "tarea_proyectos",
    }
  );
  return Tarea_Proyecto;
};
