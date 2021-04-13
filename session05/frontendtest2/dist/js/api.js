/* defining the Api */

const Api = (function(){

	const request = function(url, type, callback){
		fetch(url).then(response => {
			return response.json();
		}).then(data => {
			if(Array.isArray(data)){
				let return_arr = [];
				data.forEach(item => {
					return_arr.push(new type(item));
				});
				callback(return_arr);
			}else{
				callback(new type(data));
			}
		});
	};

	const get_course = function(id, callback){
		request(`/api/course${id}.json`, Course, callback);
	};

	const get_courses = function(callback){
		request(`/api/courses.json`, Course, callback);
	};

	return {
		get_courses: get_courses,
		get_course: get_course
	}
})();