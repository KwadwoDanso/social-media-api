// DEPENDENCIES
const express = require("express");
const app = express();

// Local Environmental Variables
const PORT = 3001;

// MIDDLEWARE

// ROUTES
app.get("/", (req, res) => {
    res.send("Server's up and running...");
});

// PORT
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});