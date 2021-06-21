'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses',
      [{
        id: 1,
        name: 'Turma-1A',
        schoolId: 1,
        teacherId: 1,
      },
      {
        id: 2,
        name: 'Turma-1B',
        schoolId: 1,
        teacherId: 2,
      },
      {
        id: 3,
        name: 'Turma-1A',
        schoolId: 2,
        teacherId: 3,
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
