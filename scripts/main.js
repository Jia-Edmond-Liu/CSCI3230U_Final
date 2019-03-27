$(document).ready(function(){

	var video = $('.background');

			var player = new Vimeo.Player(video);

	player.ready().then(function() {
		 player.setVolume(0);
		});
	// $("#infvis").click(function(){
	//
	// });
});
