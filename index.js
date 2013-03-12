var magfa = require('./lib/magfa');
module.exports = magfa;



var app = new magfa({
	username : 'mobinnet',
	password: '83868000',
	from : '9830009679',
	to : '09122493033'
});
// app.enqueue().get();
app.enqueue().post();

/*
<select dir="ltr" id="sender_number" name="sender_number">
					<option value="+9830009679">+9830009679</option>
<option value="+98300096790">+98300096790</option>
<option value="+9830009679300096">+9830009679300096</option>
<option value="+983000967979">+983000967979</option>
<option value="+983000967997">+983000967997</option>
<option value="+9830009679999999">+9830009679999999</option>
					</select>
*/