const defineCourseModel = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    teacherId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, { timestamps: false });

  Course.associate = (models) => {
    Course.belongsTo(models.Teacher, {
      as: 'teacher',
      foreignKey: 'teacherId',
    });
  };

  return Course;
};

module.exports = defineCourseModel;

