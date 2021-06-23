const defineUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile: DataTypes.STRING,
  }, { timestamps: false });

  return User;
};

module.exports = defineUserModel;
