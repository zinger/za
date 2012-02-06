'use strict';
  
(function($){
  var TextContestDetail = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid));
    var entryid = args.entryid;
    var contestid = args.contestid;
    var invokedBy = args.invokedBy;

    // TODO: Using the contestid we need to get all entries for the contest
    // TODO: We need to set the active page of the slider using the entry id
    
    var contest = {cid: '1', sd: '1/12/2012', ed: '2/18/2012', sed: '1/30/2012', inviteothers: '1', name: 'Crazy Fools', tagl: 'Craziest Zing Ever', url: '../../samplecontent/images/1.jpg', numparts: 55};

    var textEntries = [];
    textEntries.push({eid: '1', title: 'Title1', fbpid: 'User1', fbpname: 'fbpname 1', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', myvote: 5, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1 });
    textEntries.push({eid: '2', title: 'Title2', fbpid: 'User2', fbpname: 'fbpname 2', fbpurl: '../../samplecontent/images/thumbnails/2.jpg', myvote: 6 , voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1   });
    textEntries.push({eid: '3', title: 'Title3', fbpid: 'User3', fbpname: 'fbpname 3', fbpurl: '../../samplecontent/images/thumbnails/3.jpg', myvote: 6, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1   });
    textEntries.push({eid: '4', title: 'Title4', fbpid: 'User4', fbpname: 'fbpname 4', fbpurl: '../../samplecontent/images/thumbnails/4.jpg', myvote: 6 , voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1   });
    textEntries.push({eid: '5', title: 'Title5', fbpid: 'User5', fbpname: 'fbpname 5', fbpurl: '../../samplecontent/images/thumbnails/5.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1 });
    textEntries.push({eid: '6', title: 'Title6', fbpid: 'User6', fbpname: 'fbpname 6', fbpurl: '../../samplecontent/images/thumbnails/6.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1    });
    textEntries.push({eid: '7', title: 'Title7', fbpid: 'User7', fbpname: 'fbpname 7', fbpurl: '../../samplecontent/images/thumbnails/7.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1    });
    textEntries.push({eid: '8', title: 'Title8', fbpid: 'User8', fbpname: 'fbpname 8', fbpurl: '../../samplecontent/images/thumbnails/8.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1    });
    textEntries.push({eid: '9', title: 'Title9', fbpid: 'User9', fbpname: 'fbpname 9', fbpurl: '../../samplecontent/images/thumbnails/9.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1 });
    textEntries.push({eid: '10', title: 'Title10', fbpid: 'User10', fbpname: 'fbpname 10', fbpurl: '../../samplecontent/images/thumbnails/10.jpg', myvote: -1, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1});
    textEntries.push({eid: '11', title: 'Title11', fbpid: 'User11', fbpname: 'fbpname 11', fbpurl: '../../samplecontent/images/thumbnails/11.jpg', myvote: 6, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1});
    textEntries.push({eid: '12', title: 'Title12', fbpid: 'User12', fbpname: 'fbpname 12', fbpurl: '../../samplecontent/images/thumbnails/12.jpg', myvote: 6, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1});
	
   var $contestTitle = $('<div class="contest-title">'+contest.name+'</div>');
    $contestTitle.bind('click', function () {
      $parentdiv.empty();
      za.ViewContest({parentid: parentid});
    });
    $parentdiv.append($contestTitle);   

    if (invokedBy !== 'home') {
      var $submitEntry = $('<button class="submit-entry-button" id="'+za.buttons['submitentry'].id+'"/>');
      $submitEntry.button({label: za.buttons['submitentry'].label});
      $submitEntry.bind('click', function() { 
	$parentdiv.empty();
	za.SubmitEntry({parentid: parentid});
      });
      $parentdiv.append($submitEntry);
    };
/*    
    $parentdiv.append(za.buildRatingPanel({entryId: '123', partName: 'Lucky'}));
    $("#rate-root").children('input').each(function(i, element){ // this needs to be done after rate-root has been appended to parent
      $(this).button();
    });
*/    
    var showMiscInfo = function(entry) {
      if (invokedByInit) var $base = slider.$el.find('.panel').eq(slider.options.startPanel);
      else var $base = slider.$targetPage;
      var myvote;
      $base.find('#myvote').each(function(){ myvote = $(this).val(); })
      if (myvote === '-1') $("#rate-root").show(); else $("#rate-root").hide();
      showRatingInfo();
      if ($(".send-gift")) $(".send-gift").remove();
      $("#gallery1").parent().append($('<div class="send-gift">Send a gift</div>'));
      $(".send-gift").effect("bounce", { times:3, direction: 'left'}, 1000);
    };
    
    var showRatingInfo = function(entry) {
      //if ($(".rating-info")) $(".rating-info").remove();
      var $div = $('<div class="text-rating-info"></div>');
      $div.append($('<div class="votes"></div>'));
      $div.append($('<span class="avg-score">'+entry.score+'</span>'));
      $div.append($('<span class="vote-count">'+entry.voteCount+' votes</span>'));
      $div.append($('<div class="rank">#'+entry.rank+'</div>'));
      $div.append($('<div class="img-trend"></div>'));
      return $div;
      //$("#gallery1").parent().append($div);
    };
    
    $parentdiv.append($('<img src="'+contest.url+'" style="width:600px; height:400px;" />'));
    var $entriesdiv = $('<div id="text-entries"></div>');
    var $ul = $('<div id="text-entries-ul"></div>');
    $.each(textEntries, function(i, entry) {
      var $li = $('<li class="text-entry-li"></li>');
      $li.append($('<div class="part-pic"><img src="'+entry.fbpurl+'" style="width:40px; height:40px;"/></div>'));
      var $divinfo = $('<div class="text-div-info"></div>');
      $divinfo.append($('<span class="part-name">'+entry.fbpname+'</span>'));
      $divinfo.append($('<div class="text-entry">'+entry.title+'</div>'));
      $li.append($divinfo);
      $li.append(showRatingInfo(entry));
      $ul.append($li);	
    });
    $entriesdiv.append($ul);
    $parentdiv.append($entriesdiv);
  };
  za.TextContestDetail = TextContestDetail;
}(jQuery));