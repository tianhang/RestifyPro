/**
 *
 * Created by tianhang on 16/6/2016.
 */

// Model for the Student
module.exports = (function studentSchema () {

    var mongoose = require('../db').mongoose;

    var schema = {
        name: {type: String, required: true},
        email: {type: String, required: true},
        age: {type: String, required: true},
        city: {type: String, required: true}
    };
    var collectionName = 'student';
    var studentSchema = mongoose.Schema(schema);
    var Student = mongoose.model(collectionName, studentSchema);

    return Student;
})();
