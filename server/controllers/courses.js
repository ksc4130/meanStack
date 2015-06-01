var Course = require('mongoose').model('Course');

exports.getCourses = function (req, res) {
    Course.find({}).exec(function(err, docs) {
        res.send(docs);
    });
};

exports.getCoursesById = function (req, res) {
    Course.findOne({_id: req.params.id}).exec(function(err, doc) {
        res.send(doc);
    });
};