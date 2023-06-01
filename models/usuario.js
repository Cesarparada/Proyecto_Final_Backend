'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
   
    static associate(models) {
      
      Usuario.hasMany(models.Contacto,{
        foreignKey: "id_usuario",
      });
      Usuario.hasMany(models.Tarea_Proyecto,{
        foreignKey: "id_usuario",
      });
      Usuario.hasMany(models.Usuario_Proyecto,{
        foreignKey: "id_usuario",
      });

      Usuario.belongsTo(models.Role, {
        foreignKey: "id_role",
      });

      
    }
  }
  Usuario.init({

     id_role: {
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
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is:/^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        },
      },
      fecha_de_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isAfter: "1900-01-01",
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8
        },
      },
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: "usuarios"
  });
  return Usuario;
};