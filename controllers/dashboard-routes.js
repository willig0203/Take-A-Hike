const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, Comment, Image } = require('../models');

router.get('/', (req, res) => {
  Trail.findAll({
    where: {
      user_id: req.session.user_id 
    },
    attributes: ['id', 'trail_name', 'city', 'state', 'distance_miles'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'trail_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbTrailDate => {
    const trails = dbTrailDate.map(trail => trail.get({ plain: true }));
    res.render('dashboard', { trails, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;