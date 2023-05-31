'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listas', 
    [
      {
       titulo: 'Puntos para la investigación',
       descripcion:"Puntos que seguir para realizar ",
       tarea:"Escoger un tema, Sacar los puntos relevantes, Desarrollar los puntos",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
      {
       titulo: 'Lista de compra',
       descripcion:"Los productos que necesitamos para la fiesta",
       tarea:"Bebidas, Comidas, Chuces, globos, Cubiertos, Música",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
      {
       titulo: 'Requerimientos',
       descripcion:"Requerimientos para el proyecto final",
       tarea:"Introducción, Desarrollo del tema, Resaltar puntos importantes, Conclusión, Referncias",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
      {
       titulo: 'Lo necesario para el blog',
       descripcion:"Ideas y pasos para hacer mi nuevo blog",
       tarea:"Elegir tematicas, Buscar posibles titulos, Tomar fotos, Escribir, Referncias",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
      {
       titulo: 'Entrega deldomingo',
       descripcion:"requisitos que debo tner para la entrega",
       tarea:"Titulos, Tomar fotos, Escribir, Referncias",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('listas', null, {});
     
  }
};
