'use strict';
  
(function($){
  var GalleryCollection = function(args) {
    var id = args.id;
    //$("#gallery").append($ppmain);
    //$( za.jq(id) ).append($('<p>HaHa Gallery</p>'));
        var api_images = ['../plugins/prettyphoto/images/fullscreen/1.jpg',
                      '../plugins/prettyphoto/images/fullscreen/2.jpg',
                      '../plugins/prettyphoto/images/fullscreen/3.jpg'];
    var api_titles = ['Title 1','Title 2','Title 3'];
    var api_descriptions = ['Description 1','Description 2','Description 3'];
    $("a[rel^='prettyPhoto']").prettyPhoto();
    
    //$.prettyPhoto.open(api_images,api_titles,api_descriptions);
    
    //$ppmain = $('<div id="ppdisplay" rel="prettyPhoto"></div>');
    //$ppmain.prettyphoto();
    //$("#gallery").append($ppmain);
    //$.ppmain.open(api_images,api_titles,api_descriptions);
    
    $.prettyPhoto.open(api_images,api_titles,api_descriptions);
    
    $pp = $('<div></div>');
    
    $pp.append($('<a href="../plugins/prettyphoto/images/fullscreen/1.jpg" rel="prettyPhoto[pp_gal]" title="You can add caption to pictures."><img src="../plugins/prettyphoto/images/thumbnails/t_1.jpg" width="60" height="60" alt="Red round shape" /></a>'));

    $pp.append($('<a href="../plugins/prettyphoto/images/fullscreen/2.jpg" rel="prettyPhoto[pp_gal]"><img src="../plugins/prettyphoto/images/thumbnails/t_2.jpg" width="60" height="60" alt="Nice building" /></a>'));

    $pp.append($('<a href="../plugins/prettyphoto/images/fullscreen/3.jpg" rel="prettyPhoto[pp_gal]"><img src="../plugins/prettyphoto/images/thumbnails/t_3.jpg" width="60" height="60" alt="Fire!" /></a>'));

    $pp.append($('<a href="../plugins/prettyphoto/images/fullscreen/4.jpg" rel="prettyPhoto[pp_gal]"><img src="../plugins/prettyphoto/images/thumbnails/t_4.jpg" width="60" height="60" alt="Rock climbing" /></a>'));

    $pp.append($('<a href="../plugins/prettyphoto/images/fullscreen/5.jpg" rel="prettyPhoto[pp_gal]"><img src="../plugins/prettyphoto/images/thumbnails/t_5.jpg" width="60" height="60" alt="Fly kite, fly!" /></a>'));
    
    $("#gallery").append($pp);
  };
  za.GalleryCollection = GalleryCollection;
}(jQuery));