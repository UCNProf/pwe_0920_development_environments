mocha.setup('bdd');

var assert = chai.assert;

describe('initialize_elements', () => {
	it('should set elements as variables not null', () => {
		initialize_elements();
		// var courses_ul, courseinfo_div, info_p;
		assert.notEqual(courses_ul, null);
		assert.notEqual(courseinfo_div, null);
		assert.notEqual(info_p, null);
	});
});

describe('display_courses', function() {
	var data;

	beforeEach(() => {
		data = [
			new Course({id: 1, title: "Test 1", description: "Test"}),
			new Course({id: 2, title: "Test 2", description: "Test"})
		];
	});

	it('should insert content into courses_ul', function() {
		display_courses(data);
		assert.notEqual(document.querySelector('ul#courses').innerText, '');
	});
});

describe('display_course', function() {
	var data;

	beforeEach(() => {
		data = new Course({id: 1, title: "Test", description: "Test"});
	});

	it('should insert content into courseinfo_div', function() {
		display_course(data);
		assert.notEqual(document.querySelector('div#courseinfo').innerText, '');
	});

	it('should change class name of info_p to "hide"', function() {
		display_course(data);
		assert.equal(document.querySelector('p#info').classList.contains('hide'), true);
	});
});

describe('Course', function() {
	var data;

	beforeEach(() => {
		data = {id: 1, title: "Test", description: "Test"} 
	});

	describe('id', () => {
		it('should return id', () => {
			let course = new Course(data);
			assert.isObject(course);
			assert.equal(course.id, data.id);
		});
	});
	describe('get_title', () => {
		it('should return title with id', () => {
			let course = new Course(data);
			assert.equal(course.get_title(), `${data.title} (${data.id})`);
		});
	});
});

describe('Api', () => {
	var id;

	beforeEach(() => {
		id = 1;
	});

	describe('get_course', () => {
		it('should return an object', done => {
			Api.get_course(id, course => {
				assert.isObject(course);
				assert.equal(course.id, id);
				done();
			});
		}); 
	});

	describe('get_courses', () => {
		it('should return an array with two objects', done => {
			Api.get_courses(courses => {
				assert.isArray(courses);
				assert.equal(courses.length, 2);
				done();
			});
		}); 
	});
});


mocha.run();