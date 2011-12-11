'use strict';
  
(function($){
  var Gallery = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    za.PictureContestDetail({parentid: parentid});
  };
  za.Gallery = Gallery;
}(jQuery));