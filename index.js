var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var spook = io.of('/spookyspook');

spook.on('connection', function(socket) {
	console.log('another spook has entered the game!');
	socket.on('sendSpook', function(aSpook) {
		console.log('someone sent a spook');
		spook.emit('spook', aSpook);
	});
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(5000, function() {
  console.log('listening on *:3000');
});
