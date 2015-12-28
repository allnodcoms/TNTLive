// Additional Array functions

var TNT = TNT || {};

TNT.fn = TNT.fn || {};

TNT.fn._push = function(a, v) { // increase size of array 'a' by 1 and stick 'v' on the end...
	a.push(v);
};

TNT.fn._pop = function(a) { // pull last element from array 'a' (reducing length by 1) and return it
	return a.pop();
};

// probably more to follow...