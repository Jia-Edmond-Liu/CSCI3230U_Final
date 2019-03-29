$.support.cors = true;

var videoinfo;

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

  $(".videoButton").click(function() { //scrolls to video portfolio when clicked
    $('html,body').animate({
        scrollTop: $(".video-portfolio").offset().top},
        'slow');
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
      window.location.href = "../FinalProject/main.html";
    });

  // var xhttp = new XMLHttpRequest(); //pull from JSON
  // xhttp.onreadystatechange = function(){
  //   if ((xhttp.readyState == 4) && (xhttp.status)){
  //
  //     var data = xhttp.responseText;
  //     var json = JSON.parse(data);
  //     window.videoinfo = json['videos'];
  //   }
  // }
  // xhttp.open("GET", 'https://api.myjson.com/bins/15lt9m', true);
  // xhttp.send();
  //
  //
  // function pullVideos(){
  //   for (var i = 0; i < videoinfo.length; i++) {
  //     var title = videoinfo[i]['title'];
  //     var videolink = videoinfo[i]['video']
  //     var tagline = videoinfo[i]['tagline']
  //
  //     var appendthis = '<br> <iframe width="1600" height="900" src="'+videolink+'" frameborder="0" allow="accelerometer;\
  //     autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe> <h2 id="videTitle">'+title+'\
  //     </h2> <h4 id="tagline">' + tagline+ '</h4>';
  //
  //     $(".jqueryvideos").append(appendthis);
  //   }
  // }
  function pullVideos(){
  	var url = "https://api.myjson.com/bins/15lt9m"
      $.getJSON(url,function(data){
    		var numofvideos = data.videos.length;
    		var title = [];
    		var videolink = [];
    		var tagline = [];
    		for(var i = 0; i < numofvideos ; i++){
    			title[i] = data.videos[i].title;
    			videolink[i] = data.videos[i].video;
    			tagline[i] = data.videos[i].tagline;

          var appendthis = '<br> <iframe width="1600" height="900" src="'+videolink[i]+'" frameborder="0" allow="accelerometer;\
          autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe> <h2 id="videTitle">'+title[i]+'\
          </h2> <h4 id="tagline">' + tagline[i]+ '</h4>';

          $(".jqueryvideos").append(appendthis);
    		}
  	})
  }
  pullVideos();
});
//
// function pullVideos(){
//   console.log('test')
//   for (var i = 0; i < videoinfo.length; i++) {
//     var title = videoinfo[i]['title'];
//     var videolink = videoinfo[i]['video']
//     var tagline = videoinfo[i]['tagline']
//
//     displayVideos(title, videolink, tagline);
//   }
// }
//
// function  displayVideos(title, videolink, tagline) {
//   var appendthis = '<br> <iframe width="1600" height="900" src="'+videolink+'" frameborder="0" allow="accelerometer;\
//   autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe> <h2 id="heading">'+title+'\
//   </h2> <h4 id="tagline">' + tagline+ '</h4>';
//
//   $(".jqueryvideos").append(appendthis);
// }
