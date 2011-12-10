'use strict';
  
(function($){
  var Home = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    $parentdiv.append($('<p>HaHa Home</p>'));
    
  };
  za.Home = Home;
}(jQuery));
