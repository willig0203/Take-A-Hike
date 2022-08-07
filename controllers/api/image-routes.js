const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all images
router.get('/', (req, res) => {
  Image.findAll({
    attributes: ['image_url', 'description', 'user_id'],
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

