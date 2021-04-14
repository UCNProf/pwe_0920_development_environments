var MongoClient = require('mongodb').MongoClient;

var state = {db:null};

exports.connect = function(done) {
	if(state.db) return done();

	MongoClient.connect('mongodb://website01:eLow8yBSp34wXx@127.0.0.1:27017/website01?w=majority', {useUnifiedTopology: true})
		.then(client => {
			state.db = client.db('website01');
			done();
		})
		.catch(err => console.log(err));
};

exports.get = function(){
	return state.db;
};