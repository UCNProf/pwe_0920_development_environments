var express = require('express');
var router = express.Router();
var db = require('../db');
var mongodb = require('mongodb');

/* GET notes listing. */
router.get('/', function(req, res, next) {
	var collection = db.get().collection('notes');

	collection.find().toArray().then(result => {
		res.render('notes/index', { title: 'Notes', notes: result });
	});
});

/* GET form for a note */
router.get('/new', function(req, res, next) {
	res.render('notes/form', { title: 'New note' });
});

router.post('/new', function(req, res, next) {
	var note = {};
	note.title = req.body.title;
	note.content = req.body.content;

	var collection = db.get().collection('notes');

	collection.insertOne(note).then(result => {
		res.redirect('/notes');
	})
	.catch(err => {console.log(err)});
});

/* GET note by id */
router.get('/:id', function(req, res, next) {
	var id = new mongodb.ObjectID(req.params.id);
	var collection = db.get().collection('notes');

	collection.findOne({_id: id}).then(result => {
		res.render('notes/form', { title: 'Notes', note: result });
	});
});

/* POST update to a note */
router.post('/:id', function(req, res, next) {
	var id = new mongodb.ObjectID(req.params.id);
	var collection = db.get().collection('notes');

	collection.updateOne({_id: id},
	{
		$set: {'title': req.body.title, 'content': req.body.content},
		$currentDate: {lastModified: true}
	}).then(result => {
		res.redirect('/notes');
	})
	.catch(err => {console.log(err)});
});


module.exports = router;
