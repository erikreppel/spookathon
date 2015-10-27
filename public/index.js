(function() {
	var audio = new Audio('death.mp3');
	var url = window.location.href + 'spookyspook';
	console.log(url);
	var sessionId = Math.random();
	var socket = io.connect(url);

	$('#ghost').click(function(){
		socket.emit('sendSpook', {'session': sessionId});
	});

	socket.on('spook', function(data) {
		console.log('Your session is', sessionId, 'you got spooked by', data.session);
		//if (sessionId !== data.session){
		$('#spookyDiv').html('<img src="http://i.imgur.com/wio50hd.gif"/>');
		audio.play();
		//}
		//else
		//	window.alert('You spooked some fools. Nice!')
	});
})();
