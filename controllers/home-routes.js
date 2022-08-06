const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, Comment } = require('../models');

router.get('/', (req, res) => {
  Trail.findAll({
    attributes: [
      'id',
      'trail_name',
      'city',
      'state',
      'created_at'
    ],
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
    .then(dbTrailData => {
      res.render('homepage', dbTrailData[0].get({ plain: true }));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// auth
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});
// end auth

module.exports = router;
