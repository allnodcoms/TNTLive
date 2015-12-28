// TNTBasic - Javascript Runtime

var TNT = TNT || {};

TNT.state = {
	start_time: 0, // TNT's timestamp at boot
	mouse_x: 0, // mouse x after last move event
	mouse_y: 0,
	mouse_state: false, // true after mousedown, false after mouseup
	key_state: false,
	key_repeat: true, // default to accept repeating keys
	keyboard_queue: [], // character buffer
	cursor_keys: { // current state of cursor keys
		up:false, 
		down:false, 
		left:false, 
		right:false, 
		space:false
	},
	current_canvas: 0
};

TNT.init = (function() {
	var d = new Date();
	TNT.state.start_time = d.getTime();
	
	document.addEventListener('mousemove', function(e){
		TNT.state.mouse_x = e.clientX;
		TNT.state.mouse_y = e.clientY;
	});
	
	document.addEventListener('mousedown', function(e){
		TNT.state.mouse_state = true;
	});
	
	document.addEventListener('mouseup', function(e){
		TNT.state.mouse_state = false;
	});
	
	document.addEventListener('keydown', function(e) {
		e.preventDefault(); // there is no default behaviour, so kill event after processing.
		event.stopPropagation();
		var k = e.keyCode;
		return false; // indicate that we have handled the event fully.
	});
	
	document.addEventListener('keyup', function(e) {
		e.preventDefault();
		event.stopPropagation();
		var k = e.keyCode;
		return false;
	});
	
	document.addEventListener('keypress', function(e) { // 'printable' keys...
		e.preventDefault();
		event.stopPropagation();
		var k = e.keyCode;
		return false;
	});
})();
