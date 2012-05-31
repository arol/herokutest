var restify = require('restify');

var server = restify.createServer();

server.get('/hello/:name', function(req, res, next){
	res.send(200,"Hola mon")
	
	return next()
});

server.get('/', function(req, res, next){
	res.send(200, "Hola mon")
	
	return next()
})

//GET /hello/:nom/:edat
server.get(/hello\/([\D]+)\/([\d]+)/,function(req,res,next){
	// res.send(200,"Hola "+req.params[0]+" amb edat "+req.params[1])
	var attributs = new Array("alt", "ric", "guapo")
	
	var json = {
		nom: req.params[0],
		edat: req.params[1],
		atributs: attributs
	}
	res.send(200, json)
	
	return next()
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
  console.log("Let's Rock!!!");
  //little changes
  //more changes
});

