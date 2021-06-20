const defineStudentCourseModel = (sequelize, _DataTypes) => {
  const StudentCourse = sequelize.define('StudentCourse',
    { }, { timestamps: false, tableName: 'StudentsCourses' });
    
    StudentCourse.associate = (models) => {
      models.Student.belongsToMany(models.Course, {
        as: 'courses',
        through: StudentCourse,
        foreignKey: 'studentId',
        otherKey: 'courseId',
      });
  
      models.Course.belongsToMany(models.Student, {
        as: 'students',
        through: StudentCourse,
        foreignKey: 'courseId',
        otherKey: 'studentId',
      });
  };
  return StudentCourse;
};

module.exports = defineStudentCourseModel;