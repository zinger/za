'use strict';
  
(function($){
  var TextContestDetail = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid));
    var entryid = args.entryid;
    var contestid = args.contestid;
    var invokedBy = args.invokedBy;
    var contestTitle = args.contestTitle;
    var contestUrl = args.contestUrl;
    
    var $contestTitleDiv = $('<div></div>');
    var $contestTitle = $('<span class="contest-title">'+contestTitle+'</span>');
    $contestTitle.bind('click', function () {
      $parentdiv.empty();
      za.ViewContest({parentid: parentid, contestid: contestid});
    });
    $contestTitleDiv.append($contestTitle);
    $parentdiv.append($contestTitle);
    
    
    var $submitTextEntryForm = $('<form id="submit-text-entry-form" enctype="multipart/form-data" method="post"></form>');
    //$createcontestform.append($('<input id="op" name="op" value="create_contest" />'));
    $submitTextEntryForm.append($('<div><textarea rows="5" cols="50" name="tentry" id="tentry"></textarea></div>'));
    
    $parentdiv.append($submitTextEntryForm);
    
    var $finishbutton = $('<button id="submit-text-entry" />') ;
    $finishbutton.button({label: 'Done'});
    $finishbutton.bind('click', function() {
      var obj = {};
      obj['op'] = 'submit_text_entry';
      obj['fbpid'] = za.userFbId;
      obj['fbpname'] = za.userFbName;
      obj['cid'] = contestid;
      obj['type'] = za.entrytypes['text'].value;
      obj['desc'] = $("#tentry").val();
      alert("obj being passed is " + JSON.stringify(obj));
      $.post( za.getServerUri(), obj,
          function(data) {
              alert('response received ' + JSON.stringify(data));
              return false;
          } );
    });
    $parentdiv.append($finishbutton);
    /**** old submit entry

    
    var $submitEntry = $('<button class="submit-entry-button" id="'+za.buttons['submitentry'].id+'"/>');
    $submitEntry.button({label: za.buttons['submitentry'].label});
    $submitEntry.bind('click', function() { 
      $parentdiv.empty();
      za.SubmitEntry({parentid: parentid, contestid: contestid, contestTitle: contestTitle});
    });
    $parentdiv.append($submitEntry);
    */
    // TODO: Using the contestid we need to get all entries for the contest
    // TODO: We need to set the active page of the slider using the entry id
    
    var data = 'op=get_entries&cid='+contestid;
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        
      dataType: 'json',                      
      success: function(data) { displayEntries(data['result']); }
    });
    
    var displayEntries = function(entries) {
      if (entries.length === 0) {
	$("#rate-root").hide();
	$parentdiv.append($('<div><span>There are no entries for this contest. Be the first one and get 50 bonus Zing Coins!</span></div>'));
      } else {
	var textEntries = [];
	var gotoslide = 0;
	$.each(entries, function(i, row) {
	    if (entryid !== undefined && row.entryid === entryid) gotoslide = i;
	    textEntries.push({eid: row.id, title: row.name, description: row.description, fbpid: row.fb_pid, fbpname: row.fb_pname, cid: row.contest_id, name: row.name, etype: row.entry_type, fbpurl: '../../samplecontent/images/thumbnails/1.jpg', myvote: 5, voteCount: 20, likeCount: 15, commentCount: 25, giftCount: 10, booCount: 5, score: 7, rank: 8, trend: 1 });
	  });
	$parentdiv.append($('<img src="'+contestUrl+'" style="width:600px; height:400px;" />'));
	var $entriesdiv = $('<div id="text-entries"></div>');
	var $ul = $('<div id="text-entries-ul"></div>');
	$.each(textEntries, function(i, entry) {
	  var $li = $('<li class="text-entry-li"></li>');
	  $li.append($('<div class="part-pic"><img src="'+entry.fbpurl+'" style="width:40px; height:40px;"/></div>'));
	  var $divinfo = $('<div class="text-div-info"></div>');
	  $divinfo.append($('<span class="part-name">'+entry.fbpname+'</span>'));
	  $divinfo.append($('<span class="text-entry">'+entry.description+'</span>'));
	  $li.append($divinfo);
	  $li.append(showRatingInfo(entry));
	  $ul.append($li);	
	});
	$entriesdiv.append($ul);
	$parentdiv.append($entriesdiv);
      };
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
    
    
  };
  za.TextContestDetail = TextContestDetail;
}(jQuery));