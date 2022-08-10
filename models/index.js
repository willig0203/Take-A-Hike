const User = require('./User');
const Trail = require('./Trail');
const Comment = require('./Comment');
const Image = require('./Image')

User.hasMany(Trail, {
  foreignKey: 'user_id'
});

Trail.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true
});

Comment.belongsTo(Trail, {
  foreignKey: 'trail_id',
  onDelete: 'CASCADE',
  hooks: true
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Trail.hasMany(Comment, {
  foreignKey: 'trail_id'
});

User.hasMany(Image, {
  foreignKey: 'user_id'
});

Image.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true
});

module.exports = { User, Trail, Comment, Image };