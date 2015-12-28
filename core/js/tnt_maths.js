// Math ops (no error checking!)

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._mabs = function(a) {
	
	if(a < 0) return 0 - a;
	
	return a;
};

TNT.fn._mmod = function(n, d) {
	return n % d;
};

TNT.fn._msqrt = function(n) {
	return Math.sqrt(n);
};

TNT.fn._md2r = function(d) { // degrees to radians (for javscript Math calls)
	return d * (Math.PI / 180);
};

TNT.fn._mr2d = function(r) { // radians to degrees, for converting back again...
	return r * (180 / Math.PI);
};

TNT.fn._msin = function(d) {
	return Math.sin(_md2r(d));	
};

TNT.fn._mcos = function(d) {
	return Math.cos(_md2r(d));
};

TNT.fn._mtan = function(d) {
	return Math.tan(_md2r(d));
};

TNT.fn._minvsin = function(s) {
	return _mr2d(Math.asin(s));
};

TNT.fn._minvcos = function(c) {
	return _mr2d(Math.acos(c));
};

TNT.fn._minvtan = function(t) {
	return _mr2d(Math.atan(t));
};

// ** RADIAN VERSIONS TO FOLLOW ** //

TNT.fn._mcangle = function(sx, sy, ex, ey) {
	var a = Math.atan2(ey - sy, ex - sx) * 180 / Math.PI;
	
	// 'a' is now an angle (in degs) where east = 0, north east is -45 and so on... W00TY!
	
	a = Math.round(a) + 90; // nearest whole degree, rotated 90 degrees counter-clockwise. North is now 0...
	
	if(a < 0) a += 360; // negative values wrapped - good to go!
	
	return a;
};

TNT.fn._madifference = function(n, o) { // n = new angle, o = old angle. Returns signed difference.
	var d = n - o; // d is signed difference between two angles.
	
	if(d > 180) { // now normalise for + / -180 only
		d -= 360;
	}
	else { // must be a better way than this?
		
		if(d < -180) {
			d += 360;
		}
	}
	
	return d; // works though...
};

TNT.fn._mceil = function(f) {
	return Math.ceil(f);
};

TNT.fn._mround = function(f) {
	return Math.round(f);
};

TNT.fn._mfloor = function(f) {
	return Math.floor(f);
};

TNT.fn._mrandom = function(a, b) {
	return Math.floor(Math.random() * (b - a + 1)) + a;
};

TNT.fn._mrandseed = function(s) { // does nothing - can't set in plain JS.
	return; // need to build a custom RNG to use this... Do I need to?
};

TNT.fn._mmax = function(a, b) {
	
	if(a > b) return a;
	
	return b;
};

TNT.fn._mmin = function(a, b) {
	
	if(a < b) return a;
	
	return b;
};

TNT.fn._mwrap = function(v, l, h) { // 'v'alue, 'l'ow and 'h'igh
	
	if(v >= l && v<= h) return v;
	
	var r = h - l; // 'r'ange
	var o = (Math.abs(v) % r) - 1; // modulus preserves sign in JS, hence abs().
	
	if(v > h) return l + o;
	
	return h - o;
};

