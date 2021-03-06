module.exports = {

	server : 
	{
		hostname: 'messaging.magfa.com',
		port: 443,	// 80(HTTP) & 443(HTTPS) are acceptable.
		path: '/magfaHttpService?', // Base Path of API
		method: 'POST' // POST & GET, are acceptable.
	},
	magfa : 
	{
		domain   : 'magfa', 
		username : null, 
		password : null,
		from     : null
	}
}