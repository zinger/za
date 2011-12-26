'use strict';
  
(function($){
  var Coins = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    za.PictureContestDetail({parentid: parentid});
  };
  za.Coins = Coins;
}(jQuery));