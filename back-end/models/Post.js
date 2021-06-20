const definePostModel = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.STRING,
    teacherId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    courseId: {
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
    Post.belongsTo(models.Course, {
      as: 'course',
      foreignKey: 'courseId',
    });
  };

  return Post;
};

module.exports = definePostModel;
