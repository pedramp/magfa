# Magfa SMS gateway



## Sample
var magfa = require('magfa')
var app = new magfa({
	username : 'USERNAME',
	password: 'PASSWORD',
	from : '983000XXXX',
	to : '091XXXXXXXX'
});
app.enqueue('sample text').get(console.log);

## Methods:
1. enqueue **implemented**
2. getCredit	**not implemented**
3. getMessageStatus	**not implemented**
4. getMessageId	**not implemented**
5. getRealMessageStatus 	**not implemented**


_March 2012_