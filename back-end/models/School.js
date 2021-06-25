const defineSchoolModel = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    principal: DataTypes.STRING,
  }, { timestamps: false });

  School.associate = (models) => {
    School.hasMany(models.Course, {
      as: 'course',
      foreignKey: 'schoolId',
    });
  };

  return School;
};

module.exports = defineSchoolModel;
