const db = require('../config/connection');
const { Model } = require('../models');

const data = require('./data.json');

db.once('open', async () => {
  await Model.deleteMany({});

  const modelData = await Model.insertMany(techData);

  console.log('Model seeded!');
  process.exit(0);
});
