var fs = require('fs');

fs.writeFile('myNewFile.txt', 'Hello Content!', function (err) {
	console.log('Saved');
});