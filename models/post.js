module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [40]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [40]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [15]
      }
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    age: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    calbudget: {
      type: DataTypes.INTEGER
    },
    indate: {
      type: DataTypes.DATEONLY
    },
    calories: {
      type: DataTypes.INTEGER
    }
  });
  return Post;
};
