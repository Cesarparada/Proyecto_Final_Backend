'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {
    
    static associate(models) {
      Contacto.belongsTo(models.Usuario, {
        foreignKey: "id_usuario",
      })

      Contacto.hasMany(models.Lista,{
        foreignKey:"id_contacto",
      });
    }
  }
  Contacto.init(
    {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is:/^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Contacto',
    tableName: "contactos"
  });
  return Contacto;
};