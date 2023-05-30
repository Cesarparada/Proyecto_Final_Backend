'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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