'use strict';
  
(function($){
  var Home = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );
    $parentdiv.append($('<p>HaHa Home</p>'));   
  };
  za.Home = Home;
}(jQuery));
