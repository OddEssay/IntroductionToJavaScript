// Alternative IF THEN ELSE Syntax

//variable = IF ? THEN : ELSE
a = 1 ? 2 : 3; // a = 2
console.log('a is: ' + a);

b = 0 ? 2 : 3; // b = 3
console.log('b is: ' + b);

getX = function(option){
	x = option ? option : 'No Option Set';
	return x;
}
console.log(getX('Moo')); // Returns 'Moo'
console.log(getX()); // Returns 'No Options Set'