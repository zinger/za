'use strict';
  
(function($){
  var Gallery = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );    
    za.PictureContestDetail({id: parentid, galleryid: "mygallery"});
  };
  za.Gallery = Gallery;
}(jQuery));