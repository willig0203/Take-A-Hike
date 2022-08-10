const router = require('express').Router();
const { User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all images
router.get('/', (req, res) => {
  Image.findAll({
    attributes: ['id', 'image_url', 'description', 'user_id'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then(dbImageData => res.json(dbImageData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get a single image by ID
router.get('/:id', (req, res) => {
  Image.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['image_url', 'description', 'user_id'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then(dbImageData => {
      if (!dbImageData) {
        res.status(404).json({ message: 'No iamge found with this id' });
        return;
      }
      res.json(dbImageData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Create a new image
router.post('/', (req, res) => {
  Image.create({
    image_url: req.body.image_url,
    description: req.body.description,
    user_id: req.session.user_id
  })
    .then(dbImageData => res.json(dbImageData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a image by ID
router.delete('/:id', (req, res) => {
  Image.destroy({
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbImageData => {
      if (!dbImageData) {
        res.status(404).json({ message: 'No image found with this id' });
        return;
      }
      res.json(dbImageData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

