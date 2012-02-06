'use strict';
  
(function($){
  var Invite = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );    
    //za.PictureContestDetail({parentid: parentid});
    za.inviteToApp();
    /*
	$parentdiv.append($('<div class="page-title">Invite Friends</div>'));
	$parentdiv.append($('<iframe src="invite.html" width="850" height="700" frameborder=0><p>Your browser does not support IFrame.</p></iframe>'));
    */
  };
  za.Invite = Invite;
}(jQuery));