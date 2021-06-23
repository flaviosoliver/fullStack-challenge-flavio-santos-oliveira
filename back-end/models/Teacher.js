const defineTeacherModel = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Teacher;
};

module.exports = defineTeacherModel;
