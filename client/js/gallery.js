'use strict';
  
(function($){
  var Gallery = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );
    
    $parentdiv.append($('<p>HaHa Gallery</p>'));
    
    alert("Parent id is " + parentid);
    
    za.GalleryCollection({id: parentid});

  };
  za.Gallery = Gallery;
}(jQuery));