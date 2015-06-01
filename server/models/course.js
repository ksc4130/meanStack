var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function (err, docs) {
       if(docs.length === 0) {
           Course.create({
               title: 'Course number one',
               featured: false,
               published: new Date('1/12/2015'),
               tags: ['one']
           });

           Course.create({
               title: 'This is course two',
               featured: true,
               published: new Date('3/23/2015'),
               tags: ['two']
           });

           Course.create({
               title: 'Wow course awesome',
               featured: true,
               published: new Date('5/05/2015'),
               tags: ['wow', 'awesome']
           });

           Course.create({
               title: 'Some course',
               featured: false,
               published: new Date('2/09/2015'),
               tags: ['some']
           });
       }
    });
}

exports.createDefaultCourses = createDefaultCourses;