var magfa = require('../lib/magfa');
var app = new magfa({
	username : 'USERNAME',
	password: 'PASSWORD',
	from : '983000XXXX',
	to : '091XXXXXXXX',
	message : 'Hello...'
});
// app.enqueue().get();
//app.enqueue('text messgae A  سلام به شما').post();
app.enqueue('sample text').get(function(id)
{
	console.log(id == '19');
});
