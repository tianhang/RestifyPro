/**
 *
 * Created by tianhang on 16/6/2016.
 */

module.exports = function(app) {
    var student = require('./controllers/studentController');
    var info = require('./controllers/infoController');
    var zip = require('./controllers/zipController');

    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });

    app.post('/createStudent', student.createStudent); //Create Student API
    app.post('/createZip',zip.createZip); //Create Student API
    app.get('/getStudent', student.getStudent);  // Get All Student Details API
    app.get('/getIn', student.getStudent);  // Get All Student Details API
    app.get('/getInfo',info.getInfo);
    app.get('/getZip',zip.getZip);
};