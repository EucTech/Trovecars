require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const {error} = require("console");

const uploadImages = require('./controllers/uploadImages');

const port = process.env.PORT || 4000;
const mongoString = process.env.DATABASE_URL;


// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

database.once('open', () => {
    console.log('Database connected');
});

// Mount the image upload route
app.use('/api', uploadImages);

// Routes
const router = require('./routes/index');
app.use('/api', router);

// Start the server
app.listen(port, (error) => {
	if (!error) {
		console.log("Serving Running on Port " + port)
	} else {
		console.log("Error: " + error)
	}
})

