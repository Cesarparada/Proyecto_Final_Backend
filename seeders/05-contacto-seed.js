"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "contactos",
      [
        {
          id_usuario: 1,
          nombre: "Jose",
          email: "jose@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 2,
          nombre: "Marta",
          email: "marta@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 3,
          nombre: "Pepita",
          email: "pepita@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 5,
          nombre: "Carlos",
          email: "carlos@correo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario: 4,
          nombre: "Pepa",
          email: "pepa@correo.com",
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
