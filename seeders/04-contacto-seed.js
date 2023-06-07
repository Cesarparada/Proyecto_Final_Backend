"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "contactos",
      [
        {
          id_usuario: 6,
          nombre: "Miguel",
          email: "miguel@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 7,
          nombre: "Ernesto",
          email: "enersto@corrreo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 8,
          nombre:   "juan",
          email: "juan@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 9,
          nombre:"Pepe",
          email: "pepe@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contactos", null, {});
  },
};
