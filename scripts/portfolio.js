$(document).ready(function(){

	$("#infvis").hover(function(){
		$("#infvis").css("cursor","pointer");
	});
	$("#about").hover(function(){
		$("#about").css("cursor","pointer");
	});
	$("#portfolio").hover(function(){
		$("#portfolio").css("cursor","pointer");
	});
	$("#contact").hover(function(){
		$("#contact").css("cursor","pointer");
	});
	$("#shop").hover(function(){
		$("#shop").css("cursor","pointer");
	});

  $(".videoButton").hover(function(){ //hover function changes animation on button
    $(".videoButton").css("background-color", 'White');
    $(".videoButton").css("color", 'black');
  },function(){
    $(".videoButton").css("background-color", "Transparent");
    $(".videoButton").css("color", 'white');
  });

  $(".photoButton").hover(function(){ //hover function changes animation on button
    $(".photoButton").css("background-color", 'White');
    $(".photoButton").css("color", 'black');
  },function(){
    $(".photoButton").css("background-color", "Transparent");
    $(".photoButton").css("color", 'white');
  });


	var video = $('.background'); // background video volume off

			var player = new Vimeo.Player(video);

		player.ready().then(function() {
		 player.setVolume(0);
		});

		$('#about').click(function () {
		window.location.href = "../FinalProject/about.html";
		});

    $("#infvis").click(function(){
      console.log("hello");
      window.location.href = "../FinalProject/main.html";
    });


});
