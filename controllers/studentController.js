/**
 *
 * Created by tianhang on 16/6/2016.
 */

//This Controller deals with all functionalities of Student

function studentController () {
    var Student = require('../models/studentSchema');

    // Creating New Student
    this.createStudent = function (req, res, next) {
        var name = req.params.name;
        var email = req.params.email;
        var age = req.params.age;
        var city = req.params.city;

        Student.create({name: name, email: email, age: age, city: city}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send({'error': err});
            }
            else {
                return res.send({'result': result, 'status': 'successfully saved'});
            }
        });
    };

    // Fetching Details of Student
    this.getStudent = function (req, res, next) {

        Student.find({}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send({'error': err});
            }
            else {
                return res.send({'student Details': result});
            }
        });
    };
    return this;

};

module.exports = new studentController();
