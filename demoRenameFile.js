var fs = require('fs');

fs.rename('myNewFile1.txt', 'myNewFile.txt', function(err) {
	if (err) throw err;
	console.log('File renamed');
});