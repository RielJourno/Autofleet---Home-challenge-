const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const locationSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    bearing: Number
});

const classSchema = new mongoose.Schema({
    name: String
});

const carSchema = new mongoose.Schema({
    id:{                                              //"001078f6-acfd-42fe-8c9c-84cecbb83630"
        type: String,
        //required: [true, "please enter car ID"],
        unique: true
    },
    state: String,                                     //"online"
    routeCommitId: {
        type: String,
        default: null
    },                                                 //null
    seats: Number,                                     //4
    class: classSchema,                                //name: "A"                                              //
    location: locationSchema,                          //51.4694976807 //-0.0493916683 //0
    distance: Number                                   //19888 
 });


// ## Geocode & create location ##
//  carSchema.pre('save', async function(next){
//      const loc = await geocoder.geocode(this.location);
//      console.log(loc);
//  });


 module.exports = mongoose.model("Car", carSchema);