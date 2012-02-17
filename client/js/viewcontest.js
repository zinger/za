'use strict';
  
(function($){
  var ViewContest = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(args.parentid) );
    var contestid = args.contestid;
    var attrs = za.contestattrs;
    var entrytypes = za.entrytypes;
    var data = 'op=get_contest_by_id&id=' + contestid;
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(serverdata)          //on recieve of reply
      { alert(JSON.stringify(serverdata)); displayContestDetails(serverdata['result'][0]); }
    });
/****
{"result":[{"id":"2","name":"Crazy Fools","tag_line":"Craziest Zing Ever","start_date":"0000-00-00 00:00:00",
"end_date":"0000-00-00 00:00:00","submission_end_date":"0000-00-00 00:00:00","contest_type":"1","entry_type":"1",
"description":"<p>This is the description</p>","tags":"these are tags","who_can_participate":"1","invite_others":"0","status":"0","cause_id":"0","fb_object_id":"","big_url":"","med_url":"","small_url":"","fb_pid":"","fb_pname":"","featured":"0","featured_start_date":"0000-00-00 00:00:00","featured_end_date":"0000-00-00 00:00:00","created_by_id":"0","updated_by_id":"0","date_created":"0000-00-00 00:00:00","date_updated":"0000-00-00 00:00:00"}],"op":"get_contest_by_id"}
*****/
    var displayContestDetails = function(contest) {
      var contestData = {name: contest.name, tagl: contest.tag_line, sd: contest.start_date, ed: contest.end_date, sed: contest.submission_end_date,
        ctype: contest.contest_type, etype: contest.entry_type, whocan: contest.who_can_participate, inviteothers: contest.invite_others,
        desc: contest.description, tags: contest.tags};

      $parentdiv.append($('<div class="page-title">View Contest</div>'));
      $parentdiv.append($('<div class="contest-title">'+contestData.name+'</div>'));
      $parentdiv.append($('<div class="tag-line">'+contestData.tagl+'</div>'));
      $parentdiv.append($('<div class="date-label">'+attrs['startdate'].label+'</div>'));
      $parentdiv.append($('<div class="contest-date">'+contestData.sd+'</div>'));
      $parentdiv.append($('<div class="date-label">'+attrs['enddate'].label+'</div>'));
      $parentdiv.append($('<div class="contest-date">'+contestData.ed+'</div>'));
      $parentdiv.append($('<div class="date-label">'+attrs['entrydeadline'].label+'</div>'));
      $parentdiv.append($('<div class="contest-date">'+contestData.sed+'</div>'));
      
      var $ul1 = $('<ul class="contest-info-labels"></ul>');
      $ul1.append($('<li class="info-label">'+attrs['iscaption'].label+'</li>'));
      $ul1.append($('<li class="info-label">'+attrs['entrytype'].label+'</li>'));
      $ul1.append($('<li class="info-label">'+attrs['whocanpart'].label+'</li>'));
  
      var $ul2 = $('<ul class="contest-info-values"></ul>');    
      var ctypeValue;
      if (contestData.ctype === '1') ctypeValue = 'Yes'; else ctypeValue = 'No';
      $ul2.append($('<li class="info-value">'+ctypeValue+'</li>'));
      var entrytypevalue;
      switch (contestData.etype) {
        case za.entrytypes['picture'].value:
          entrytypevalue = za.entrytypes['picture'].label; break;
        case za.entrytypes['video'].value:
          entrytypevalue = za.entrytypes['video'].label; break;
        case za.entrytypes['text'].value:
          entrytypevalue = za.entrytypes['text'].label; break;
      }
      $ul2.append($('<li class="info-value">'+entrytypevalue+'</li>'));
      var whocanpartvalue;
      if (contestData.whocan === za.whocanpart['everyone'].value)
        whocanpartvalue = za.whocanpart['everyone'].label;
      else
        whocanpartvalue = za.whocanpart['restricted'].label;
      $ul2.append($('<li class="info-value">'+whocanpartvalue+'</li>'));
      
      $parentdiv.append($ul1);
      $parentdiv.append($ul2);
      if (contestData.inviteothers === '1') $parentdiv.append($('<div class="div-label">Participants can invite others to participate!</div>'));
      
      $parentdiv.append($('<div class="div-label">'+attrs['details'].label+'</div>'));
      $parentdiv.append($('<div class="div-label">'+contestData.desc+'</div>'));
      
      var $editbutton = $('<button id="edit-button" />') ;
      $editbutton.bind('click', function() {
        $parentdiv.empty();
        za.CreateContest({parentid: parentid, contestData: contestData});
      });
      $editbutton.button({label: 'Edit Contest'});
      $parentdiv.append($editbutton);
    };
  };
  za.ViewContest = ViewContest;
}(jQuery));
