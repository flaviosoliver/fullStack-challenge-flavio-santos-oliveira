'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentsCourses', {
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,      
        references: {
          model: 'Students',
          key: 'id',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      classId: {
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
    await queryInterface.dropTable('StudentsCourses');
  }
};