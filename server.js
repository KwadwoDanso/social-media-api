// DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient } = require("mongodb");

// Local Environmental Variables
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URI;

// MIDDLEWARE
const client = new MongoClient(uri);

// DATABASE CONNECTION
async function mongoDbConnection() {
    try {
        await client.connect();
        console.log("Database Connection Has Been Made!");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
    }
}
mongoDbConnection();

// ROUTES
app.get("/", (req, res) => {
    res.send("Server's up and running...");
});

// PORT
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});