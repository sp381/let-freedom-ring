const db = require('../config/connection');
const { Thought } = require('../models');
const thoughtSeeds = require('./thoughtSeed.json');

db.once('open', async () => {
  await Thought.deleteMany({});
  await Thought.create(thoughtSeeds);

  console.log('all done!');
  process.exit(0);
});
