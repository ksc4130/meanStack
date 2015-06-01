var mongoose = require('mongoose'),
    user = require('../models/user'),
    course = require('../models/course');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback () {
        console.log('meanStack db opened');
    });

    user.createDefaultUsers();
    course.createDefaultCourses();
};

