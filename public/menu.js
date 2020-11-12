const burger = document.querySelector('.burger');
const bars = document.querySelector('.burger__bars');
const menu = document.querySelector('.menu-drop');

let showMenu = false;
burger.addEventListener('click', () => {
	if (!showMenu) {
		menu.classList.add('open');
		bars.classList.add('open');
		showMenu = true;
	}
	else {
		menu.classList.remove('open');
		bars.classList.remove('open');
		showMenu = false;
	}
});