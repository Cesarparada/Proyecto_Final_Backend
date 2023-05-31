"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tarea_proyectos",
      [
        {
          id_lista: 1,
          id_usuario: 1,
          id_proyecto: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 2,
          id_usuario: 2,
          id_proyecto: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 3,
          id_usuario: 3,
          id_proyecto: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 4,
          id_usuario: 4,
          id_proyecto: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 5,
          id_usuario: 5,
          id_proyecto: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 1,
          id_usuario: 6,
          id_proyecto: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 2,
          id_usuario: 7,
          id_proyecto: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 3,
          id_usuario: 8,
          id_proyecto: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_lista: 3,
          id_usuario: 9,
          id_proyecto: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tarea_proyectos", null, {});
  },
};
