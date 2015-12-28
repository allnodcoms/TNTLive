// String ops

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._strlower = function(s) {
	return s.toLowerCase();
};

TNT.fn._strupper = function(s) {
	return s.toUpperCase();
};

TNT.fn._strlength = function(s) {
	return s.length;
};

TNT.fn._strremovechar = function(s, i) {
	--i; // call is one based, string is zero based.
	return s.substring(0, i) + s.substring(i + 1);
};

TNT.fn._strgetchar = function(s, i) {
	--i; // make zero based
	return s.substr(i, 1);
};

TNT.fn._strtostring = function(n, p) {
	p = p || 0; // assume no decimal places if none specified.
	return n.toFixed(p).toString();
};

TNT.fn._strtonumber = function(s) {
	return parseFloat(s); // no error checks here...?
};

TNT.fn._strleftstr = function(s, l) {
	return s.substr(0, l);
};

TNT.fn._strrightstr = function(s, l) {
	return s.substr(0 - l);
};

TNT.fn._strmidstr = function(s, i, l) {
	--i; // make index zero based
	return s.substr(i, l);
};
