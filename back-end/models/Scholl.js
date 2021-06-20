const defineSchoolModel = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    principal: DataTypes.STRING,
  }, { timestamps: false });

  return School;
};

module.exports = defineSchoolModel;
