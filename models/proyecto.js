"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    static associate(models) {
      Proyecto.hasMany(models.Usuario_Proyecto, {
        foreignKey: "id_proyecto",
      });
      Proyecto.hasMany(models.Tarea_Proyecto, {
        foreignKey: "id_proyecto",
      });
    }
  }
  Proyecto.init(
    {
      titulo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Proyecto",
      tableName: "proyectos",
    }
  );
  return Proyecto;
};
