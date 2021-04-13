var courses_ul, courseinfo_div, info_p;

const display_courses = courses => {
	let list_str = '';
	courses.forEach(course => {
		list_str += `<li><a href="${course.id}">${course.title}</a></li>`;
	});
	courses_ul.innerHTML = list_str;
};

const display_course = course => {
	courseinfo_div.innerHTML = `<h2>${course.get_title()}</h2><div>${course.description}</div>`;
	info_p.classList.add('hide');
};

const on_courses_ul_click = e => {
	e.preventDefault();
	if(e.target.nodeName == 'A'){
		let id = e.target.attributes['href'].value;
		Api.get_course(id, display_course);
	}
};

const initialize_elements = () => {
	courses_ul = document.querySelector('ul#courses');
	courseinfo_div = document.querySelector('div#courseinfo');
	info_p = document.querySelector('p#info');
};

window.addEventListener('DOMContentLoaded', e => {
	// For testing purposes lines are commented out
	//initialize_elements();
	//Api.get_courses(display_courses);
	//courses_ul.addEventListener('click', on_courses_ul_click);
});