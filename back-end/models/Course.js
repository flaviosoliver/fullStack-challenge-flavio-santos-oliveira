const defineCourseModel = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    schoolId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, { timestamps: false });

  Course.associate = (models) => {
    Course.belongsTo(models.School, {
      as: 'school',
      foreignKey: 'schoolId',
    });
  Course.associate = (models) => {
    Course.belongsTo(models.Teacher, {
      as: 'teacher',
      foreignKey: 'teacherId',
    });
  };

  return Course;
};

module.exports = defineCourseModel;

