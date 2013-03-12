var magfa = require('../lib/magfa');
var assert = require("assert");

var app = new magfa({
	username : 'USERNAME',
	password: 'PASSWORD',
	from : '983000XXXX',
	to : '091XXXXXXXX',
	message : 'Hello...'
});
// app.enqueue().get();
//app.enqueue('text messgae A  سلام به شما').post();

describe('basic test', function()
{
	it('calling API with GET method.', function(done)
	{
		app.enqueue('sample text').get(function(id)
		{
			assert.equal(id ,'19'); // username/password/domain are not valid.
			done();
		});
	})
})