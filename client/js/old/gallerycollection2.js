'use strict';
  
(function($){
  var GalleryCollection2 = function(args) {
    alert("COming here");
    var $parentdiv = $( za.jq(args.id) );
        
    var $slider = $('<ul id="slider"></ul>');
    
    $slider.append($('<li><div class="text">This is just dummy text</div></li>'));
    $slider.append($('<li><img src="../../samplecontent/images/1.jpg" /></li>'));
    $slider.append($('<li><img src="../../samplecontent/images/2.jpg" /></li>'));
    $slider.append($('<li><img src="../../samplecontent/images/3.jpg" /></li>'));
    $slider.append($('<li><img src="../../samplecontent/images/4.jpg" /></li>'));
    $slider.append($('<li><img src="../../samplecontent/images/5.jpg" /></li>'));
    
    $parentdiv.append($slider);
    
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
    $carouseldiv.append($ul);
    $parentdiv.append($carouseldiv);
    
    //$('.rs-carousel').carousel({itemsPerPage: 3, orientation: 'horizontal'});
    //var opts = {};
    $('.rs-carousel').carousel({orientationvalue: 'horizontal',
			        itemsPerPagevalue: 'auto',
				itemsPerTransitionvalue: 'auto',
				speedvalue: 'normal',
				easingvalue: 'swing',
				paginationvalue: true,
				nextPrevActionsvalue: true,
				autoScrollvalue: false,
				continuousvalue: false});
  };
  za.GalleryCollection2 = GalleryCollection2;
}(jQuery));