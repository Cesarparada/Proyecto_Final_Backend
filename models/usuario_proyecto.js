'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario_Proyecto.init({
    id_usuario: DataTypes.INTEGER,
    id_proyecto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario_Proyecto',
  });
  return Usuario_Proyecto;
};