$.support.cors = true;

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

  var xhttp = new XMLHttpRequest(); //pull from JSON
  xhttp.onreadystatechange = function(){
    if ((xhttp.readyState == 4) && (xhttp.status)){

      var data = xhttp.responseText;
      var json = JSON.parse(data);
      videoinfo = json['videos'];
    }
  }
  xhttp.open("GET", '/videos.json', true);
  xhttp.send();

  console.log('test')
  function pullVideos(){
    for (var i = 0; i < videoinfo.length; i++) {
      var title = videoinfo[i]['title'];
      var videolink = videoinfo[i]['video']
      var tagline = videoinfo[i]['tagline']
      console.log('test')
      displayVideos(title, videolink, tagline);
    }
  }

  function  displayVideos(title, videolink, tagline) {
    var appendthis = '<br> <iframe width="1600" height="900" src="'+videolink+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe> <h2 id="heading">'+title+'\
    </h2> <h4 id="tagline">' + tagline+ '</h4>';

    $(".jqueryvideos").append(appendthis);


    // var video = document.createElement("IMG");
    // var res = image.slice(0, 6);
    // var imgname = "images/" + image.slice(7)
    // console.log(imgname);
    // //image1.setAttribute(res,imgname);
    // image1.src = imgname;
    // image1.setAttribute("width", "200");
    // image1.setAttribute("height", "200");
    // document.body.appendChild(image1);
    //
    // var hotelTitle = document.createElement("P");
    // var hotelTitleName = document.createTextNode(name);
    // hotelTitle.appendChild(hotelTitleName);
    // document.body.appendChild(hotelTitle);
    //
    // var hotelPrice = document.createElement("P");
    // var priceNum = document.createTextNode(price);
    // hotelTitle.appendChild(priceNum);
    // document.body.appendChild(hotelTitle);


    //Connect CSS class
    /*var att = document.createAttribute("class");
    att.value = "democlass";
    h1.setAttributeNode(att);*/
  }



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
