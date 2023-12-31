const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'user',
    //     key: 'name',
    //   },
    // },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'topic',
        key: 'id',
      },
    },
    // topic_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'topic',
    //     key: 'name',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
