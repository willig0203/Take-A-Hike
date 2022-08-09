const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedTrails = require('./trailData');
const seedComments = require('./commentData');
const seedImages = require('./imageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedTrails();
  await seedComments();
  await seedImages();
  process.exit();
};

seedAll();