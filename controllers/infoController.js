/**
 * Created by tianhang on 17/6/2016.
 */

function infoController () {
    var Info = require('../models/infoSchema');

    // Fetching Details of info
    this.getInfo = function (req, res, next) {

        Info.find({"cuisine": "Irish","borough": "Manhattan",}, function (err, result) {
            if (err) {
                console.log(err);
                return res.send({'error': err});
            }
            else {
                return res.send({'info Details': result});
            }
        });
    };
    return this;
};

module.exports = new infoController();
