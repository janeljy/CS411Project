var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
const { Schema } = mongoose
const MealSchema = new Schema({
    sugar_g: Number,
    fiber_g: Number,
    serving_size_g: Number,
    sodium_mg: Number,
    name: String,
    potassium_mg: Number,
    fat_saturated_g: Number,
    fat_total_g: Number,
    calories: Number,
    cholesterol_mg: Number,
    protein_g: Number,
    carbohydrates_total_g: Number,
});

let MealData = mongoose.model('MealData', MealSchema)

router.post('/', function(req, res, next) {
    console.log(req.query)
    let mealdata = new MealData(req.query);
    mealdata.save(function (err){ 
        if (err){
            console.log(err) 
            res.sendStatus(500)
        }})

    //check database contents
    MealData.find(function(err, items){
        if(err) {
            res.sendStatus(500)
            return console.error(err)
        }
            let reply = JSON.stringify(items)
        console.log(reply)
    })

    res.sendStatus(200) //OK
})

module.exports = router