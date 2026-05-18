// DEPENDENCIES
const express = require("express");
const app = express();
//require('node:dns').setServers(['0.0.0.0/0','8.8.8.8', '1.1.1.1']);
require("dotenv").config();
const { MongoClient } = require("mongodb");

// Local Environmental Variables
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;


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
app.get("/", async (req, res) => {
    try {
        await client.db("admin").command({ ping: 1 });
        res.json({ message: "Successfully connected to the database!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to connect to the database." });
    }
});

// PORT
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});