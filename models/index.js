const User = require('./User');
const Topic = require('./Topic');
const Comment = require('./Comment');

User.hasMany(Topic, {
  foreignKey: 'user_name',
  onDelete: 'CASCADE',
});

Topic.belongsTo(User, {
  foreignKey: 'user_name',
});

User.hasMany(Comment, {
  foreignKey: 'user_name',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_name',
});

Topic.hasMany(Comment, {
  foreignKey: 'topic_name',
  onDelete: 'CASCADE',
});

Topic.belongsTo(Comment, {
  foreignKey: 'topic_name',
});

module.exports = { User, Topic, Comment };
