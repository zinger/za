'use strict';
  
(function($){
  var Hall = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    za.PictureContestDetail({parentid: parentid});
  };
  za.Hall = Hall;
}(jQuery));