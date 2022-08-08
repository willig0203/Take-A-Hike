const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, Comment, Image } = require('../models');

router.get('/', (req, res) => {
  Trail.findAll({
    where: {
      //user_id: req.session.user_id 
      user_id: 1
    },
    attributes: ['trail_name', 'city', 'state', 'distance_miles'],
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