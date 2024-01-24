var fs = require('fs');

fs.writeFile('myNewFile.txt', 'This is my text', function (err) {
	if(err) throw err;
	console.log('Replaced!');
});