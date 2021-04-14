// switch to the db website01
use website01;

// create a user that only have access to db website01
db.createUser({
		user: "website01",
		pwd: "eLow8yBSp34wXx",
		roles: ["readWrite", "dbAdmin"]
	});

// create three new notes
db.createCollection("notes");
db.notes.insertOne({title:"Test 1", content: "<p>Content 1</p>"});
db.notes.insertOne({title:"Test 2", content: "<p>Content 2</p>"});
db.notes.insertOne({title:"Test 3", content: "<p>Content 3</p>"});

//$ docker run -d --name mongo_devops -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=sd4rtg54sdfgt5 mongo
//$ docker exec -i mongo_devops mongo -u admin -p sd4rtg54sdfgt5 < db_config.js