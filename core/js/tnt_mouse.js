// Mouse Functions

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._hidemouse = function() {
	document.body.classList.add('hidemouse');
}

TNT.fn._showmouse = function() {
	document.body.classList.remove('hidemouse');
}

TNT.fn._mousex = function() {
	return TNT.state.mouse_x;
}

TNT.fn._mousey = function() {
	return TNT.state.mouse_y;
}