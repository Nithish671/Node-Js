var fs = require('fs');

fs.appendFile('myNewFile.txt', 'Hello updated content!', function(err) {
	if(err) throw err;
	console.log('Updated!');
});