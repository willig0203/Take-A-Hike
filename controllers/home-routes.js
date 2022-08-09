const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, Comment, Image } = require('../models');


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
      res.render('homepage', {
        trails,
        loggedIn: req.session.loggedIn
      });
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

      res.render('single-trail', {
        trail,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/gallery', (req, res) => {
  Image.findAll({
    attributes: ['image_url', 'user_id', 'description'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then(dbImageData => {
      const images = dbImageData.map(image => image.get({ plain: true }));
      res.render('gallery', {
        images,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//auth
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
