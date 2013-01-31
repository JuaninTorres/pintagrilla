var express = require('express'),
	app     = express(),
	server  = require('http').createServer(app),
	io      = require('socket.io').listen(server),
	cons    = require('consolidate');

// Dejamos trabajando el server el el puerto 3000
server.listen(3000);

app.engine('.html', cons.jade);
app.set('view engine', 'html');

// Contenido estatico va en la carpeta public
app.use(express.static('./public'));

app.get('/', function(req, res){
  	res.render('index',{
                //variable titulo
  		titulo : "Pinta la grilla"
  	});
});

io.sockets.on('connection', function (socket) {

	socket.on('pintar', function (data) {
		socket.broadcast.emit('pintar', data);
	});

});



console.log("Express server running at\n  => http://localhost:3000/\nCTRL + C to shutdown");
