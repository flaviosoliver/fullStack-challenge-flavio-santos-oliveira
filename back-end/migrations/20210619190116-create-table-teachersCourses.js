'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeachersCourses', {
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false,      
        references: {
          model: 'Teachers',
          key: 'id',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('TeachersCourses');
  }
};