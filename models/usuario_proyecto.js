'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_Proyecto extends Model {
  
    static associate(models) {
      
      Usuario_Proyecto.belongsTo(models.Usuario,{
        foreignKey: "id_usuario"
      });
      Usuario_Proyecto.belongsTo(models.Proyecto,{
        foreignKey: "id_proyecto"
      });

    }
  }
  Usuario_Proyecto.init(
    {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Usuario_Proyecto',
    tableName: "usuario_proyectos"
  });
  return Usuario_Proyecto;
};