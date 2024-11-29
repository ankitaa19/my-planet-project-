// config/db.js

//GET All Planets: http://localhost:5001/api/planets
//Create a Planet: POST with JSON body to http://localhost:5001/api/planets
//GET a Planet by ID: http://localhost:5001/api/planets/:id
//Update a Planet: PUT to http://localhost:5001/api/planets/:id
//Delete a Planet: DELETE to http://localhost:5001/api/planets/:id

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; 
        if (!uri) {
            throw new Error('MongoDB URI is not defined. Please check your .env file.');
        }
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;
