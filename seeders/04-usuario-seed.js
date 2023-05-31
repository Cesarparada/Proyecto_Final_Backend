"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nombre: "Jose",
          apellidos: "Palacios",
          fecha_de_nacimiento: "1996-05-01",
          email: "jose@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Marta",
          apellidos: "Garcia",
          fecha_de_nacimiento: "2002-09-10",
          email: "marta@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Pepita",
          apellidos: "Rodriguez",
          fecha_de_nacimiento: "1966-07-23",
          email: "pepita@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Pepa",
          apellidos: "Pérez",
          fecha_de_nacimiento: "1966-07-23",
          email: "pepa@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Carlos",
          apellidos: "Cabrera",
          fecha_de_nacimiento: "1966-07-23",
          email: "carlos@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Miguel",
          apellidos: "Messeger",
          fecha_de_nacimiento: "1966-07-23",
          email: "miguel@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Ernesto",
          apellidos: "Pérez",
          fecha_de_nacimiento: "1966-07-23",
          email: "enersto@corrreo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "juan",
          apellidos: "Pérez",
          fecha_de_nacimiento: "1966-07-23",
          email: "juan@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Pepe",
          apellidos: "Pérez",
          fecha_de_nacimiento: "1966-07-23",
          email: "pepe@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 1,
        },
        {
          nombre: "Admin.Liz",
          apellidos: "Pastran",
          fecha_de_nacimiento: "1966-07-23",
          email: "liz@correo.com",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
          id_role: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};
