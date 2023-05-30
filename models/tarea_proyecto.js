'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea_Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarea_Proyecto.init({
    id_lista: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_proyecto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarea_Proyecto',
  });
  return Tarea_Proyecto;
};