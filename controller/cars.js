const Car = require("../models/Car");

// @description Get the car location
// @route GET "/"
// @access Public

exports.getCarLocations = async function(req,res,next){
    try {
        const cars = await Car.find();

        return res.status(200).json({
            success: true,
            count: cars.length,
            data: cars
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Sarver Error"});
    }
};

//**** Not Mast - it's Bonus ****/
// @description Input car location informaition
// @route POST "/"
// @access Public

exports.inputCar = async function(req,res,next){
    try {
        const car = await Car.create(req.body);

        return res.status(200).json({
            success: true,
            data: cars
        });
    } catch (err) {
        console.log(err);
        if(err.code === 11000){
            return res.status(400).json({error: "This car already exists"});
        }
        res.status(500).json({error: "Sarver Error"});
    }
};