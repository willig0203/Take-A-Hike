const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Lovely trail in the east metro Twin Cities area.',
    user_id: 1,
    trail_id: 1
  },
  {
    comment_text: 'Oh boy am I fond of this trail and this state park!',
    user_id: 2,
    trail_id: 2
  },
  {
    comment_text: 'Absolutely stunning views but you might need an airlift out. It\'s a tough hike.',
    user_id: 3,
    trail_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;