'use strict';
  
(function($){
  var Contests = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );
    $parentdiv.append($('<p>HaHa Contests</p>'));
    
    var $createContestButton = $('<input id="'+za.buttons['createcontest'].id+'" type="button" />') ;
    
    $createContestButton.button({label: za.buttons['createcontest'].label});
    
    $parentdiv.append($createContestButton);
    
    $createContestButton.bind('click', function(){
      $parentdiv.empty();
      za.CreateContest({id: parentid});
    });
  };
  za.Contests = Contests;
}(jQuery));