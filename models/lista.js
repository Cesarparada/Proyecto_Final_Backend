"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    static associate(models) {
      Lista.hasMany(models.Tarea_Proyecto, {
        foreignKey: "id_lista",
      });
      Lista.belongsTo(models.Contacto, {
        foreignKey: "id_contacto",
      });
    }
  }
  Lista.init(
    {
      id_creador: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_contacto: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      tarea: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Lista",
      tableName: "listas",
    }
  );
  return Lista;
};
