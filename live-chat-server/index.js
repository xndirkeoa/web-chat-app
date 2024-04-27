const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const useRoutes = require("./Routes/useRoutes");
app.use(
    cors({
        origin: "*",
    })
);
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Function to connect to the database
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is Connected to Db");
    } catch (err) {
        console.error("Server is not Connected to Db", err.message);
        process.exit(1); // Exit the process if unable to connect to the database
    }
};

// Set up routes
app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use("/user", useRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is Running on port ${PORT}`));

// Call the function to connect to the database
connectDb();
