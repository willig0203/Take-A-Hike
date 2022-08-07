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
      const trails = dbTrailData.map(trail => trail.get({ plain: true }));
      res.render('homepage', { trails });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/trail/:id', (req, res) => {
  Trail.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'trail_name',
      'city',
      'state',
      'distance_miles',
      'description',
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
      if (!dbTrailData) {
        res.status(404).json({ message: 'No trail found with this id' });
        return;
      }

      const trail = dbTrailData.get({ plain: true });

      res.render('single-trail', { trail });
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
