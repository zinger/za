'use strict';
  
(function($){
  var Contests = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );
    $parentdiv.append($('<p>HaHa Contests</p>'));
    
    var $createContestButton = $('<input id="createcontest" type="button" />') ;
    
    $createContestButton.button({label: za.createcontestlabel});
    
    $parentdiv.append($createContestButton);
    
    $createContestButton.bind('click', function(){
      $parentdiv.empty();
      za.CreateContest({id: parentid});
    });
  };
  za.Contests = Contests;
}(jQuery));