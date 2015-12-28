// Bitwise ops (no range checking)

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._band = function(a, b) { // Binary AND
	return a & b;
};

TNT.fn._bor = function(a, b) { // Binary OR
	return a | b;
};

TNT.fn._bxor = function(a, b) { // Binary XOR
	return a ^ b;
}

TNT.fn._bset = function(o, i, v) { // original number, index of bit and value (1 / 0)
	v = v || 1; // set bit if not specified.
	var m = 1 << i; // i is zero based
	
	if(v===0) // clearing bit
	{
		return o & ~m;
	}
	
	return o | m;
}

TNT.fn._bshift = function(a, b) { // Binary Shift (left / right signed)
	
	if(b > 0) return a << b;
	
	return a >> b; // preserves sign
}

TNT.fn._btest = function(a, b) { // Test bit 'b' in 'a'
	var m = 1 << b; // mantissa
	return a & m !== 0;
}

TNT.fn._bnot = function(a) { // Binary Negate (bit inversion)
	return ~a;
}
