// // import express from 'express';

// const express = require("express");
// const dotenv = require ("dotenv");
// const {default:mongoose} = require("mongoose");
// const useRoutes = require("./Routes/useRoutes");

// const app = express();
// dotenv.config();
// app.use(express.json);
// // console.log(mongoose.connect(process.env.MONGO_URI));
//     const connectDb = async () =>{
    
// try{
// const connect = await mongoose.connect("mongodb://127.0.0.1:27017/abhi");
//     console.log("Server is Connected to Db");
// }
// catch(err){
//         console.log("Server is not Connected to Db",err.message);
// }
//     };

// connectDb();

// app.get("/",(req,res)=>{
//     res.send("API is Running123");
// });
// console.log("abhishek");
// app.use("/user",useRoutes);
// console.log(process.env.MONGO_URI);
// const PORT = 5000;
// app.listen(PORT,() =>{
// console.log("Server is Running");
// });


// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const useRoutes = require("./Routes/useRoutes");

// const app = express();
// dotenv.config();

// // Middleware to parse JSON bodies
// app.use(express.json());

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Server is Connected to Db");
//     } catch (err) {
//         console.error("Server is not Connected to Db", err.message);
//     }
// };

// connectDb();

// app.get("/", (req, res) => {
//     res.send("API is Running");
// });
// console.log('asdgiawefg');
// app.use("/user", useRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is Running on port ${PORT}`);
// });



const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const useRoutes = require("./Routes/useRoutes");

const app = express();
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Function to connect to the database
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Server is Connected to Db");

        // After connecting to the database, set up routes and start the server
        setupServer();
    } catch (err) {
        console.error("Server is not Connected to Db", err.message);
    }
};

// Set up routes and start the server
const setupServer = () => {
    app.get("/", (req, res) => {
        res.send("API is Running");
    });

    app.use("/user", useRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is Running on port ${PORT}`);
    });
};

// Call the function to connect to the database
connectDb();
