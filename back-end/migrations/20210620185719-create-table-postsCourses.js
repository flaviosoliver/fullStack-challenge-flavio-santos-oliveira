'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCourses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
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
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCourses');
  }
};
