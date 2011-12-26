'use strict';
  
(function($){
  var Invite = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    za.PictureContestDetail({parentid: parentid});
  };
  za.Invite = Invite;
}(jQuery));