const { Trail } = require('../models');

const trailData = [
  {
    trail_name: 'Hills, Lake Elmo Park Reserve',
    city: 'Lake Elmo',
    state: 'MN',
    distance_miles: 2.3,
    user_id: 1
  },
  {
    trail_name: 'High Falls Trail, Tettegouche State Park',
    city: 'Silver Bay',
    state: 'MN',
    distance_miles: 1.5,
    user_id: 2
  },
  {
    trail_name: 'Nualolo and Awaawapuhi Loop',
    city: 'Hanapepe',
    state: 'HI',
    distance_miles: 7.9,
    user_id: 3
  },
];


const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;