$(document).ready(function(){

	var iframe = $('#background-video')[0],
	player = $f(iframe),
	status = $('.status');

	player.addEvent('ready', function() {
	    player.api('setVolume', 0);
	});
	// $("#infvis").click(function(){
	//
	// });
});
