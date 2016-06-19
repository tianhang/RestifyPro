
// Model for the Student
module.exports = (function zipSchema () {

    var mongoose = require('../db').mongoose;

    var schema = {
        city: {type: String, required: true},
        loc:[Number],
        pop:Number,
        state:String
    };
    var collectionName = 'zip';
    var zipSchema = mongoose.Schema(schema);
    var zip = mongoose.model(collectionName, zipSchema);

    return zip;
})();
/*
* 
 "_id": "01001",
 "city": "AGAWAM",
 "loc": [
 -72.622739,
 42.070206
 ],
 "pop": 15338,
 "state": "MA"
* 
* */