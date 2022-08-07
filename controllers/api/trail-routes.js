const router = require('express').Router();
const { Trail, Comment, User } = require('../../models');

router.get('/', (req, res) => {
  Trail.findAll({
    attributes: ['id', 'trail_name', 'city', 'state', 'distance_miles', 'description', 'user_id']
  }).then(dbTrailData => res.json(dbTrailData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});
router.get('/:id', (req, res) => {
  Trail.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'trail_name', 'city', 'state', 'distance_miles', 'user_id', 'description'],
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
  }).then(dbTrailData => {
    if (!dbTrailData) {
      res.status(404).json({ message: 'No trail found under this ID' });
      return;
    }
    res.json(dbTrailData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})
router.post('/', (req, res) => {
  //if(req.session) {
  Trail.create({
    trail_name: req.body.trail_name,
    city: req.body.city,
    state: req.body.state,
    distance_miles: req.body.distance_miles,
    description: req.body.description,
    user_id: req.body.user_id
  }).then(dbTrailData => res.json(dbTrailData))
    .catch(err => {
      console.log(err);
      res.json(400).json(err)
    });
  //}
});
router.put('/:id', (req, res) => {
  Trail.update(req.body, {
    where: {
      id: req.params.id
    }
  }
  ).then(dbTrailData => {
    if (!dbTrailData) {
      res.status(404).json({ message: 'No trail found under this ID' });
      return;
    }
    res.json(dbTrailData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Trail.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTrailData => {
    if (!dbTrailData) {
      res.status(404).json({ message: 'No trail found under this id' });
      return;
    }
    res.json(dbTrailData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;