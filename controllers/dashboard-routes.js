const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, Comment, Image } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Trail.findAll({
    where: {
      user_id: req.session.user_id 
    },
    attributes: ['id', 'trail_name', 'city', 'state', 'distance_miles', 'description'],
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

router.get('/edit/:id', withAuth, (req, res) => {
  Trail.findOne({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'trail_name',
      'city',
      'state',
      'distance_miles',
      'description',
      'user_id'
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
      if (dbTrailData) {
        const trail = dbTrailData.get({ plain: true });
        
        res.render('edit-trail', {
          trail,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
} )

module.exports = router;