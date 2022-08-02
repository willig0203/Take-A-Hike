const User = require('./User');
const Trail = require('./Trail');
const Comment = require('./Comment');

User.hasMany(Trail, {
  foreignKey: 'user_id'
});

Trail.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Trail, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Trail.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Trail, Comment };