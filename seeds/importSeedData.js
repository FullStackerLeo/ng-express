const mongoose = require('mongoose');
const MONGO_DB_URI = process.env.MONGO_NG_URI; // Load URI from environment variable

const fs = require('fs'); // To read seed data from JSON file

const seedData = JSON.parse(fs.readFileSync('./transactions.json', 'utf-8')); // Read seed data

mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const mg_model = require('./models/yourModel'); // Import your MongoDB model

YourModel.insertMany(seedData)
  .then(() => {
    console.log('Seed data successfully inserted!');
    mongoose.connection.close(); // Close connection after seeding
  })
  .catch(err => console.error('Error seeding data:', err));
