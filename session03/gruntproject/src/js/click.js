/* JS click */

const on_click = e => {
	let b = document.querySelector('button');
	b.parentNode.append(b.cloneNode(true));
};

document.addEventListener('DOMContentLoaded', e => {
	document.querySelector('#clickable').addEventListener('click', on_click, false);
});