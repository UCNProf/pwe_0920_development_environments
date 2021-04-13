let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
let expect = chai.expect();

chai.use(chaiHttp);

describe("api router", () => {
	var data;

	beforeEach(() => {
		id = 3;
		data = {title: "Course 4", description: "Description of course 4"}
	});

	describe ("GET /courses", () => {
		it("should get a list of three courses", done => {
			chai.request(server)
				.get('/api/courses')
				.send()
				.end((err,res) => {
					res.should.have.status(200);
					var body = JSON.parse(res.text);
					body.length.should.be.equal(3);
					done();
				});
		});

		it("should get the course with id = 1 as the first object", done => {
			chai.request(server)
				.get('/api/courses')
				.send()
				.end((err,res) => {
					res.should.have.status(200);
					var body = JSON.parse(res.text);
					body[0].id.should.be.equal(1);
					done();
				});
		});
	});

	describe ("POST /courses", () => {
		it("should post a new course", done => {
			chai.request(server)
				.post('/api/courses')
				.set('content-type', 'application/json')
				.send(data)
				.end((err,res) => {
					res.should.have.status(200);
					var body = JSON.parse(res.text);
					body.should.eql(data); // if body is like data
					should.exist(body.title);
					should.not.exist(body.id);
					done();
				});
		});
	});

	describe ("GET /courses/:id", () => {
		it("should get an object with id", done => {
			chai.request(server)
				.get('/api/courses/'+id)
				.send()
				.end((err,res) => {
					res.should.have.status(200);
					var body = JSON.parse(res.text);
					body.id.should.be.equal(id);
					done();
				});
		});
	});

	describe ("PUT /courses/:id", () => {
		it("should update an object with id", done => {
			chai.request(server)
				.put('/api/courses/'+id)
				.send(data)
				.end((err,res) => {
					res.should.have.status(200);
					var body = JSON.parse(res.text);
					body.title.should.be.equal(data.title);
					body.id.should.be.equal(id);
					done();
				});
		});
	});
});