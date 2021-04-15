var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('index router', () => {
	it('should get the frontpage', done => {
		chai.request(server)
			.get('/')
			.send()
			.then(res => {
				res.should.have.status(200);
				done();
			})
			.catch(err => {console.log(err)});
	});
});