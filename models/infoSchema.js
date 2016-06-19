/**
 * Created by tianhang on 17/6/2016.
 */
// Model for the Student
module.exports = (function infoSchema () {

    var mongoose = require('../db').mongoose;
    
    var schema = {
        address: {
            building: String,
            coord: [Number],
            street: String,
            zipcode: String
        },
        borough: String,
        cuisine: String,
        grades: [
            {
                date: Date,
                grade: String,
                score: Number
            }
        ],
        name: String,
        restaurant_id: String
    };
    var collectionName ='info';
    var infoSchema = mongoose.Schema(schema);
    var info = mongoose.model(collectionName, infoSchema);

    return info;
})();