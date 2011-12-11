'use strict';
  
(function($){
  var Contests = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    
    if (za.tempvars.contestsub === 'detail') {
      za.PictureContestDetail({parentid: parentid, entryid: za.tempvars.entryid});
    } else if (za.tempvars.contestsub === 'create') {
      za.CreateContest({parentid: parentid});
    } else {
      za.BrowseContests({parentid: parentid});
    }
    za.tempvars.contestsub = '';
  };
  za.Contests = Contests;
}(jQuery));