const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
//const mongoose = require("mongoose");

//lode env vars
dotenv.config({path: "./config/config.env"})

//DB Connection
connectDB();

const app = express();



//bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//Express moduls
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Enble cors
app.use(cors());



//Routes
app.use("/api/v1/cars", require("./routes/cars"));



//heroku or local:3000
let port = process.env.PORT;
if (port == null || port == "") {
   port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});