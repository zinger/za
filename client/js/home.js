'use strict';
  
(function($){
  var Home = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    
    var data = 'op=get_featured_contests';
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        
      dataType: 'json',                      
      success: function(data) {
        displayFeaturedContests(data['result']); }
    });
    
    var displayFeaturedContests = function(contests) {
      var entryid = '1';
      za.PictureContestDetail({parentid: parentid, contestid: contests[0].id, entryid: entryid, invokedBy: 'home'});
      var featuredContests = [];
      $.each(contests, function(i, row) {
        if (i > 0)
          featuredContests.push({url: row.small_url, thumb: row.small_url, numparts: row.num_parts, cid: row.id, ctitle: row.title });
      });
      var $div = $('<div class="featured-contests"></div>');
    
      $.each (featuredContests, function(i, entry) {
        var $featured = $('<div class="featured-contest" ><img src="'+entry.url+'" width="150" height="75"></img></div>');
        $featured.bind('click', function() {
          $parentdiv.empty();
          za.tempvars.entryid = '1';
          za.tempvars.contestsub = 'detail';
          $("#tabs").tabs( "option", "selected", 1 );
        });
        $div.append($featured);
      });
      $parentdiv.append($div);
    };
    
    $parentdiv.append($('<div><span>Host in 60 seconds! It\'s Free!!</span></div>'));
    var $createContestButton = $('<input id="'+za.buttons['createcontest'].id+'" type="button" />') ;
    
    $createContestButton.button({label: za.buttons['createcontest'].label});
    
    $parentdiv.append($createContestButton);
    
    $createContestButton.bind('click', function(){
        za.tempvars.contestsub = 'create';
        $("#tabs").tabs( "option", "selected", 1 );
    });  
  };
  za.Home = Home;
}(jQuery));
