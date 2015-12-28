var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._ascii2char = function(a) {
	return String.fromCharCode(a);
};

TNT.fn._char2ascii = function(c) {
	return c.charCodeAt(0);
};

TNT.fn._clearkeys = function() {
	TNT.state.keyboard_queue.length = 0;
};

// Direction Controls

TNT.fn._up = function() {
	return TNT.status.cursor_keys.up;
};

TNT.fn._down = function() {
	return TNT.status.cursor_keys.down;
};

TNT.fn._left = function() {
	return TNT.status.cursor_keys.left;
};

TNT.fn._right = function() {
	return TNT.status.cursor_keys.right;
};

TNT.fn._space = function() {
	return TNT.status.cursor_keys.space;
};

TNT.fn._waitkey = function() {
	while(TNT.state.keyboard_queue.length === 0){}
};

TNT.fn._waitclick = function() {
	while(!TNT.state.mouse_state){} // wait for mouse down
	while(TNT.state.mouse_state){} // then wait for release...
};

TNT.fn._waitmdown = function() {
	while(!TNT.state.mouse_state){}
};

TNT.fn._waitmup = function() {
	while(TNT.state.mouse_state){}
};