// This:

a = function (a) {
	return {
		status: 'a'
	}
}
console.log( 'a returns: ' + a() );
// Is not the same as:

b = function (b)
{
	return
 		{
 			status: 'b'
 		}
}
console.log( 'b returns: ' + b() );

// So for clarity it's recommended you always keep the opening brace { on the same line.