//How $.each() works
myArray = ['One','Two','Three'];
$.each(a,function(aIndex,numWord){
	console.log('Record ' + aIndex + ' is: ' + numWord);
	console.log('Or you could use: ' + myArray[aIndex]);
});
