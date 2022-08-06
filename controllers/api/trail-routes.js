const router = require('express').Router();
const { Trail } = require('../../models');

router.get('/', (req, res) => {
  Trail.findAll({

  })
    .then(dbTrailData => {
      res.json(dbTrailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Trail.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbTrailData => {
      if (!dbTrailData) {
        res.status(404).json({ message: 'No trail found with this id' });
        return;
      }
      res.json(dbTrailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Trail.create({
    trail_name: req.body.trail_name,
    city: req.body.city,
    state: req.body.state,
    distance_miles: req.body.distance_miles,
    description: req.body.description,
    user_id: req.session.user_id
  })
    .then(dbTrailData => {
      res.json(dbTrailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Trail.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTrailData => {
      if (!dbTrailData[0]) {
        res.status(404).json({ message: 'No trail found with this id' });
        return;
      }
      res.json(dbTrailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Trail.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTrailData => {
      if (!dbTrailData) {
        res.status(404).json({ message: 'No trail found with this id' });
        return;
      }
      res.json(dbTrailData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;