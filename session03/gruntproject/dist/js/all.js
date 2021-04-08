/* JS click */

const on_click = e => {
	let b = document.querySelector('button');
	b.parentNode.append(b.cloneNode(true));
};

document.addEventListener('DOMContentLoaded', e => {
	document.querySelector('#clickable').addEventListener('click', on_click, false);
});
/******************/
/* JS hover */

const on_mouseover = e => {
	e.target.classList.add('hover');
};

const on_mouseout = e => {
	e.target.classList.remove('hover');
};

document.addEventListener('DOMContentLoaded', e => {
	document.querySelector('#hoverable').addEventListener('mouseover', on_mouseover);
	document.querySelector('#hoverable').addEventListener('mouseout', on_mouseout);
});