'use strict';
  
(function($){
  //NOT BEING USED 2/28/12
  var Vote = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    //za.PictureContestDetail({parentid: parentid});
	$parentdiv.append($('<div class="page-title">Invite Friends To Vote</div>'));
	
	var $radio = '<input type="radio" name="r1" /> Contest 1 | <input type="radio" name="r1" /> Contest 2 | <input type="radio" name="r1" /> Contest 3';
	$parentdiv.append($radio);
	
	var $fbmlContainer = $("<div id='fbmlContianer'></div>");
	$parentdiv.append($fbmlContainer);
	
	$("input[name='r1']").bind("click", function(){
		var index = $(this).index();
		$fbmlContainer.empty();
		$fbmlContainer.append('<iframe src="vote.php?c=' + index + '" width="850" height="700" frameborder=0><p>Your browser does not support IFrame.</p></iframe>');
	});
	
  };
  za.Vote = Vote;
}(jQuery));