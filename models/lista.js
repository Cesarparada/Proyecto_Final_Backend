'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
   
    static associate(models) {
      Lista.hasMany(models.Tarea_Proyecto, {
      
        foreignKey: "id_lista",
      })
    }
  }
  Lista.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    tarea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lista',
    tableName: 'listas',
  });
  return Lista;
};