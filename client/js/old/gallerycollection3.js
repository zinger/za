'use strict';
  
(function($){
  var GalleryCollection3 = function(args) {
    alert("COming here");
    var $parentdiv = $( za.jq(args.id) );
        
    var $slider1 = $('<div id="mySlider" class="royalSlider default">');
    var $ul1 = $('<ul class="royalSlidesContainer">');
    
    $ul1.append($('<li class="royalSlide"><img class="royalImage" src="../../samplecontent/images/1.jpg" width="650" height="300" /></li>'));
    $ul1.append($('<li class="royalSlide"><img class="royalImage" src="../../samplecontent/images/2.jpg" width="650" height="300" /></li>'));
    $ul1.append($('<li class="royalSlide"><img class="royalImage" src="../../samplecontent/images/3.jpg" width="650" height="300" /></li>'));
    $ul1.append($('<li class="royalSlide"><img class="royalImage" src="../../samplecontent/images/4.jpg" width="650" height="300" /></li>'));
    $ul1.append($('<li class="royalSlide"><img class="royalImage" src="../../samplecontent/images/5.jpg" width="650" height="300" /></li>'));
    
    $slider1.append($ul1);
    $parentdiv.append($slider1);
    
    /*
    $('#slider').anythingSlider();
    
    $carouseldiv = $('<div class="rs-carousel">');
    $ul = $('<ul class="rs-carousel-runner">');
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/1.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/2.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/3.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/4.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/5.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/6.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/7.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/8.jpg" /></li>'));
    $ul.append($('<li class="rs-carousel-item"><img src="../../samplecontent/images/thumbnails/8.jpg" /></li>'));
    */
    $("#mySlider").royalSlider({
        captionShowEffects:["moveleft", "fade"],
        directionNavAutoHide: true,
	controlNavThumbs: true
        /* other options go here, view javascript options to learn more */			
    });  
    
  };
  za.GalleryCollection3 = GalleryCollection3;
}(jQuery));