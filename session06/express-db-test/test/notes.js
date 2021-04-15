var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

var db = require('../db');

chai.use(chaiHttp);

describe('notes router', ()=>{
	var notecollection;
	var _notes;

	before(() => {
		return db.get().dropDatabase(() => {
			notecollection = db.get().collection('notes');
			var note = {title: 'Test from before', content: 'content..'};
			notecollection.insertOne(note).then(result => {

			});
		});
	});

	beforeEach(()=>{
		return db.get().collection('notes').find().toArray().then(notes => {
			_notes = notes;
		});
	});

	it('should get page with list of notes', done => {
		chai.request(server)
			.get('/notes')
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	it('should get page with form', done => {
		chai.request(server)
			.get('/notes/new')
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	it('should post new note', done => {
		chai.request(server)
			.post('/notes/new')
			.type('form')
			.send({title: 'Test from form', content: 'content...'})
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	it('should get page with note', done => {
		console.log(`/notes/${_notes[0]._id}`);
		chai.request(server)
			.get(`/notes/${_notes[0]._id}`)
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	it('should update a note', done => {
		chai.request(server)
			.post(`/notes/${_notes[0]._id}`)
			.type('form')
			.send({title: 'Test from update form', content: 'content...'})
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});

	it('should have two notes in notes collection', () => {
		return db.get().collection('notes').find().toArray().then(result => {
			result.length.should.be.equal(2);
			result.forEach(note => {
				should.exist(note._id);
				should.exist(note.title);
				should.exist(note.content);
			});
		});
	});
});