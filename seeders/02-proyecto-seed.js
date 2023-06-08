"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "proyectos",
      [
        {
          titulo: "Proyecto de Investigación",
          descripcion:
            "Desarrollo del proyecto requiere cumplir algunas tareas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Fiesta de cumpleaños",
          descripcion:
            "lista de tareas y productos necesarios de la fiesta del domingo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Proyecto Final",
          descripcion:
            "Desarrollo de pasos del para el proyecto final del bootcamp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Ideas del nuevo blog",
          descripcion:
            "Desarrollo de ideas para mi nuevo blog, `hacer lista de tareas y notas` ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Diseño del proyecto",
          descripcion:
            "lista de tareas para la entrega del diseño del domingo 15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("proyectos", null, {});
  },
};
