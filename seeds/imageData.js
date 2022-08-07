const { Image } = require('../models');

const imageData = [
  {
  image_url: 'https://res.cloudinary.com/dg3k5pgji/image/upload/v1659707584/livphfnubwjyroh3t0rt.jpg',
  description: 'Lake Elmo Park Reserve',
  user_id: 1
  },
  {
    image_url: 'https://res.cloudinary.com/dg3k5pgji/image/upload/v1659707706/h4xg8sdduo0hzudgnarn.jpg',
    description: 'On the dyke, Hudson, WI',
    user_id: 2
    },
    {
      image_url: 'https://res.cloudinary.com/dg3k5pgji/image/upload/v1659707721/nxq9d9xpyia7ltlkjlfi.jpg',
      description: 'NaPali coast from the Nualolo/Awaawapuhi Loop',
      user_id: 3
      },
];

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;