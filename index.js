const express = require('express')
const cors = require('cors')

// 1. app
const app = express()
app.use(cors())                   
app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use(express.static('dist'))

// 2. routes
const routes = require('./routes');
app.use('/', routes);

// 3. middlewares
const errorHandler = require('./middlewares/error-handler');
const unknownEndpoint = (request, response) => {response.status(404).send({ error: 'unknown endpoint' });};
app.use(unknownEndpoint);  // Handle unknown routes first
app.use(errorHandler);     // Handle other errors last

// 4. Mongoose
const mongodb = require('./database/Mongo.database');
mongodb.connectToDatabase();

const PORT = process.env.MONGODB_PORT
app.listen(PORT, () => {  console.log(`Server running on port ${PORT}`)})