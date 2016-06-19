/**
 * 
 * Created by tianhang on 19/6/2016.
 */

//This Controller deals with all functionalities of Student

function zipController () {
    var Zip = require('../models/zipSchema');

    // Creating New Student
    this.createZip = function (req, res, next) {
        var city = req.params.city;
        var loc = req.params.loc;
        var pop = req.params.pop;
        var state = req.params.state;

        Zip.create({city: city, loc: loc, pop: pop, state: state}, function (err, result) {
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
    this.getZip = function (req, res, next) {

        Zip.find({}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send({'error': err});
            }
            else {
                return res.send({'zip Details': result});
            }
        });
    };
    return this;

};

module.exports = new zipController();
