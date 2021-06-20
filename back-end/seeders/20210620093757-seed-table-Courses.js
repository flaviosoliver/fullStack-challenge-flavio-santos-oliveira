'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses',
      [{
        id: 1,
        name: 'Turma-1A',
        teacherId: 1,
      },
      {
        id: 2,
        name: 'Turma-1B',
        teacherId: 2,
      },
      {
        id: 3,
        name: 'Turma-2A',
        teacherId: 3,
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
