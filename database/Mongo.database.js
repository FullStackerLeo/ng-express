const mongoose = require('mongoose')
const URI = process.env.MONGO_NG_URI
mongoose.set('strictQuery', false)

async function connectToDatabase() {
  try {
    await mongoose.connect(URI);
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {  connectToDatabase, };
