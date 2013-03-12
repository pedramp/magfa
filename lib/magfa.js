require('mootools')
var config = require('../config');
var querystring = require('querystring')
var event = require('events').EventEmitter;

var Magfa = new Class({
	Implements: [event,Options],
	server:null,
    initialize:function(options)
    {
    	this.setOptions(config.magfa);
    	this.setOptions(options);
    	this.server = config.server.port == 80 ? require('http') : require('https');
		this.emit("init");
    },
    get:function(callback)
    {
    	var obj = this._makeURL();
    	this._request(obj.url + querystring.encode(obj.data), null, callback);
    	return this;
    },
    post:function()
    {
    	//TODO: implement it!
    	return this;
    },
    enqueue:function(obj)
    {
        obj = obj == null ? {} : obj;
        if(typeof(obj) == 'string')
            obj = {message : obj};
        
        this.setOptions(obj);
    	this.setOptions({method:'enqueue'});
    	return this;
    },
    getCreadit:function(obj)
    {
        //TODO: implement it!
    },
    getMessageStatus:function(obj)
    {
        //TODO: implement it!
    },
    getMessageId:function(obj)
    {
        //TODO: implement it!
    },
    getRealMessageStatus:function(obj)
    {
        //TODO: implement it!
    },
    _makeURL:function()
    {
    	if(this.options.method == null)
			throw new Error('method is required.')

    	var url = config.server.path;
    	url += 'service=' + this.options.method + '&';
    	var objs = this.options;
    	delete objs.method;

    	var obj = {};
    	for(var i in objs)
    		obj[i] = objs[i];
    	
        // obj.message = querystring.escape(obj.message);

    	return {url:url, data:obj};
    },
    _request:function(url, data, cb)
    {
        config.server.path = url;
    	var req = this.server.request(config.server, function(res) 
    	{
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) 
		  {
		  	this.emit("done", chunk);
		  	if(cb) cb(chunk);
		  }.bind(this));
		}.bind(this));

		req.on('error', function(e) 
		{
			this.emit("error", e);
			if(cb) cb(null);
		}.bind(this));
		req.end();
    }
});

module.exports = Magfa;
