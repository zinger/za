'use strict';
  
(function($){
  var GalleryCollection4 = function(args) {
    alert("COming here");
    var $parentdiv = $( za.jq(args.id) );
    
    var galleryid = args.galleryid;
        
    var $slider1 = $('<div id="'+galleryid+'" class="royalSlider default">');
    var $ul1 = $('<ul class="royalSlidesContainer">');
    
    $ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/1.jpg" data-src="../../samplecontent/images/1.jpg" style="width:200px" /></li>'));
    $ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/2.jpg" data-src="../../samplecontent/images/2.jpg" style="width:200px"/></li>'));
    $ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/3.jpg" data-src="../../samplecontent/images/3.jpg" style="width:200px"/></li>'));
    $ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/4.jpg" data-src="../../samplecontent/images/4.jpg" style="width:200px"/></li>'));
    $ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/5.jpg" data-src="../../samplecontent/images/5.jpg" style="width:200px"/></li>'));
    var $li6 = $('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/1.jpg"></li>');
    var $video6 = $('<div class="royalHtmlContent"></div>');
    //$ul1.append($('<li class="royalSlide" data-thumb="../../samplecontent/images/thumbnails/1.jpg"><div class="royalHtmlContent"><p style="font-color: white">This is html content</p></div></li>'));
    
    
    
    var $object6 = $('<object width="200" height="300"></object>');
    
    var $param1 = $('<param name="movie" value="http://www.youtube.com/v/zSgiXGELjbc&amp;hl=en_US&amp;fs=1"></param');
    var $param2 = $('<param name="allowFullScreen" value="true"></param>');
    var $param3 = $('<param name="allowscriptaccess" value="always"></param>');
    var $embed6 = $('<embed src="http://www.youtube.com/v/zSgiXGELjbc&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="200" height="300"></embed>');

    $object6.append($param1);
    $object6.append($param2);
    $object6.append($param3);
    $object6.append($embed6);
    $video6.append($object6);
    $li6.append($video6);
    $ul1.append($li6);

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
    $(za.jq(galleryid)).royalSlider({
	    	captionShowEffects:["fade"],
			controlNavThumbs:true,			
					
			imageAlignCenter:true,
			
			directionNavEnabled: true,
			welcomeScreenEnabled:false,
			hideArrowOnLastSlide:true,
			dragUsingMouse:false
			
			
	    });
    
  };
  za.GalleryCollection4 = GalleryCollection4;
}(jQuery));