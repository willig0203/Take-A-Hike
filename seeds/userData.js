const { User } = require('../models');

const userData = [
  {
    username: 'HeidiHiker',
    email: 'heidihiker@yahoo.com',
    password: 'heidihikerpw'
  },
  {
    username: 'TracyTrekker',
    email: 'tracytrekker@yahoo.com',
    password: 'tracytrekkerpw'
  },
  {
    username: 'AmberAmbler',
    email: 'amberambler@yahoo.com',
    password: 'amberamblerpw'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;