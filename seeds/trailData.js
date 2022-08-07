const { Trail } = require('../models');

const trailData = [
  {
    trail_name: 'Hills, Lake Elmo Park Reserve',
    city: 'Lake Elmo',
    state: 'MN',
    distance_miles: 2.3,
    description: 'Gentle "hills" over grassland, through some trees, and along a lake in the east metro Twin Cities area.',
    user_id: 1
  },
  {
    trail_name: 'High Falls Trail, Tettegouche State Park',
    city: 'Silver Bay',
    state: 'MN',
    distance_miles: 1.5,
    description: 'Woody trail leading to waterfalls, located in a state park along the shores of Lake Superior.',
    user_id: 2
  },
  {
    trail_name: 'Nualolo and Awaawapuhi Loop',
    city: 'Hanapepe',
    state: 'HI',
    distance_miles: 7.9,
    description: 'Down some steep slopes, across a cliff side along a goat trail, and then a leg busting up to the top. Worth it though for the spectacular views of the NaPali coast.',
    user_id: 3
  },
];


const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;