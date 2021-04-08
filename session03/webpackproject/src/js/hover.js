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