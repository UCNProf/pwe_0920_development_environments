let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();

chai.use(chaiHttp);

describe("index router", () => {
	describe ("GET /", () => {
		it("should get the frontpage", done => {
			chai.request(server)
				.get('/')
				.send()
				.end((err,res) => {
					res.should.have.status(200);
					console.log("Response Body:", res.text);
					done();
				});
		});
	});

	describe ("GET /contact", () => {
		it("should get the contact page", done => {
			chai.request(server)
				.get('/contact')
				.send()
				.end((err,res) => {
					res.should.have.status(200);
					console.log("Response Body:", res.text);
					done();
				});
		});
	});

	describe ("POST /contact", () => {
		it("should post to the contact page", done => {
			chai.request(server)
				.post('/contact')
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({name: 'Test', email: 'test@example.org', text: 'Content of message'})
				.end((err,res) => {
					res.should.have.status(200);
					console.log("Response Body:", res.text);
					done();
				});
		});
	});
});