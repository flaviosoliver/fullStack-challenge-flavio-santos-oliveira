const defineTeacherCourseModel = (sequelize, _DataTypes) => {
  const TeacherCourse = sequelize.define('TeacherCourse',
    { }, { timestamps: false, tableName: 'TeachersCourses' });
    
    TeacherCourse.associate = (models) => {
      models.Teacher.belongsToMany(models.Course, {
        as: 'courses',
        through: TeacherCourse,
        foreignKey: 'teacherId',
        otherKey: 'courseId',
      });
  
      models.Course.belongsToMany(models.Teacher, {
        as: 'teachers',
        through: TeacherCourse,
        foreignKey: 'courseId',
        otherKey: 'teacherId',
      });
  };
  return TeacherCourse;
};

module.exports = defineTeacherCourseModel;