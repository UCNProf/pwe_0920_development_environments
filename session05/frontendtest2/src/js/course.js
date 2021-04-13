/* defining the Course class */
const Course = function(data){
	for(let key in data) this[key] = data[key];
};

Course.prototype.get_title = function(desc) {
	return `${this.title} (${this.id})`;
};