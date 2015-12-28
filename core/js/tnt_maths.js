// Math ops (no error checking!)

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

function _mabs(a) {
	
	if(a < 0) return 0 - a;
	
	return a;
}

function _mmod(n, d) {
	return n % d;
}

function _msqrt(n) {
	return Math.sqrt(n);
}

function _md2r(d) { // degrees to radians (for javscript Math calls)
	return d * (Math.PI / 180);
}

function _mr2d(r) { // radians to degrees, for converting back again...
	return r * (180 / Math.PI);
}

function _msin(d) {
	return Math.sin(_md2r(d));	
}

function _mcos(d) {
	return Math.cos(_md2r(d));
}

function _mtan(d) {
	return Math.tan(_md2r(d));
}

function _minvsin(s) {
	return _mr2d(Math.asin(s));
}

function _minvcos(c) {
	return _mr2d(Math.acos(c));
}

function _minvtan(t) {
	return _mr2d(Math.atan(t));
}

// ** RADIAN VERSIONS TO FOLLOW ** //

function _mcangle(sx, sy, ex, ey) {
	var a = Math.atan2(ey - sy, ex - sx) * 180 / Math.PI;
	
	// 'a' is now an angle (in degs) where east = 0, north east is -45 and so on... W00TY!
	
	a = Math.round(a) + 90; // nearest whole degree, rotated 90 degrees counter-clockwise. North is now 0...
	
	if(a < 0) a += 360; // negative values wrapped - good to go!
	
	return a;
}

function _madifference(n, o) { // n = new angle, o = old angle. Returns signed difference.
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
}

function _mceil(f) {
	return Math.ceil(f);
}

function _mround(f) {
	return Math.round(f);
}

function _mfloor(f) {
	return Math.floor(f);
}

function _mrandom(a, b) {
	return Math.floor(Math.random() * (b - a + 1)) + a;
}

function _mrandseed(s) { // does nothing - can't set in plain JS.
	return; // need to build a custom RNG to use this... Do I need to?
}

function _mmax(a, b) {
	
	if(a > b) return a;
	
	return b;
}

function _mmin(a, b) {
	
	if(a < b) return a;
	
	return b;
}

function _mwrap(v, l, h) { // 'v'alue, 'l'ow and 'h'igh
	
	if(v >= l && v<= h) return v;
	
	var r = h - l; // 'r'ange
	var o = (Math.abs(v) % r) - 1; // modulus preserves sign in JS, hence abs().
	
	if(v > h) return l + o;
	
	return h - o;
}

