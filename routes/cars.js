const express = require("express");
const router = express.Router();
const { getCarLocations, inputCar } = require ("../controller/cars");


router
    .route("/")
    .get(getCarLocations)
    .post(inputCar);


module.exports = router;
