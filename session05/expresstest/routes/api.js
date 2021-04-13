var express = require('express');
var router = express.Router();

var courses = [
	{id: 1, title: "Course 1", description: "Description of the course 1"},
	{id: 2, title: "Course 2", description: "Description of the course 2"},
	{id: 3, title: "Course 3", description: "Description of the course 3"},
];

/* GET courses */
router.get('/courses', function(req, res, next) {
	res.json(courses);
});

/* POST a new course */
router.post('/courses', function(req, res, next) {
	var new_course = {};
	new_course.title = req.body.title;
	new_course.description = req.body.description;

	res.json(new_course);
});

/* GET course by id */
router.get('/courses/:id', function(req, res, next) {
	var id = req.params.id;
	var course = courses.find(c => c.id == id);
	res.json(course);
});

/* PUT/update course by id */
router.put('/courses/:id', function(req, res, next) {
	var id = req.params.id;
	var course = courses.find(c => c.id == id);
	course.title = req.body.title;
	course.description = req.body.description;
	// save the course, not implemented
	res.json(course);
});

module.exports = router;