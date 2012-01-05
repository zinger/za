'use strict';
  
(function($){
  var Vote = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    //za.PictureContestDetail({parentid: parentid});
	$parentdiv.append($('<div class="page-title">Invite Friends To Vote</div>'));
	$parentdiv.append($('<iframe src="../../vote.php" width="850" height="700" frameborder=0><p>Your browser does not support IFrame.</p></iframe>'));
	
  };
  za.Vote = Vote;
}(jQuery));