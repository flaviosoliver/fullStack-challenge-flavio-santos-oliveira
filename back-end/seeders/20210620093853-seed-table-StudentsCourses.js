'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StudentsCourses',
      [{
        studentId: 1,
        courseId: 1,
      },
      {
        studentId: 2,
        courseId: 2,
      },
      {
        studentId: 3,
        courseId: 3,
      },
      {
        studentId: 4,
        courseId: 3,
      },
      {
        studentId: 5,
        courseId: 2,
      },
      {
        studentId: 6,
        courseId: 2,
      },
      {
        studentId: 7,
        courseId: 1,
      },
      {
        studentId: 8,
        courseId: 2,
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StudentsCourses', null, {});
  }
};
