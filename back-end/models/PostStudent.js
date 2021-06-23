const definePostStudentModel = (sequelize, DataTypes) => {
  const Post = sequelize.define('PostStudent', {
    text: DataTypes.STRING,
    teacherId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });

  Post.associate = (models) => {
    Post.belongsTo(models.Teacher, {
      as: 'teacher',
      foreignKey: 'teacherId',
    });
  };

  Post.associate = (models) => {
    Post.belongsTo(models.Student, {
      as: 'student',
      foreignKey: 'studentId',
    });
  };

  return Post;
};

module.exports = definePostStudentModel;
