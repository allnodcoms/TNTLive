// Miscellaneous Functions

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._timer = function() {
	var d = new Date();
	return d.getTime() - TNT.state.start_time;
};

TNT.fn._delay = function(v) {
	varv d = new Date();
	var t = d.getTime() + v;
	
	while(d.getTime() < t) {}
	
}