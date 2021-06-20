'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TeachersCourses',
      [{
        teacherId: 1,
        courseId: 1,
      },
      {
        teacherId: 2,
        courseId: 2,
      },
      {
        teacherId: 3,
        courseId: 3,
      },
      {
        teacherId: 4,
        courseId: 3,
      },
      {
        teacherId: 5,
        courseId: 2,
      },
      {
        teacherId: 6,
        courseId: 2, 
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TeachersCourses', null, {});
  }
};
