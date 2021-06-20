const defineStudentModel = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    guardian: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    email: DataTypes.STRING,
  }, { timestamps: false });

  return Student;
};

module.exports = defineStudentModel;