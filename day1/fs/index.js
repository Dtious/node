const fs = require('fs');
//console.log(fs);

fs.readFile('./index.html', (err, data) => {
	if(err) throw err;
	console.log(data.toString());
});