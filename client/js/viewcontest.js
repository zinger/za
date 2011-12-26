'use strict';
  
(function($){
  var ViewContest = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(args.parentid) );
    var attrs = za.contestattrs;
    var entrytypes = za.entrytypes;
    /*
    za.contestattrs = {
    title: {id: 'name', label: 'Title', type: 'input'},
    tagline: {id: 'tagl', label: 'Tag Line', type: 'input'},
    startdate: {id: 'sd', label: 'Start Date', type: 'input'},
    enddate: {id: 'ed', label: 'End Date', type: 'date'},
    entrydeadline: {id: 'sed', label: 'Entry Deadline', type: 'date'},
    iscaption: {id: 'ctype', label: 'Caption Contest', type: 'checkbox'},
    pictureurl: {id: 'url', label: 'Picture', type: 'input'},
    entrytype: {id: 'etype', label: 'Entry Type', type: 'radio'},
    whocanpart: {id: 'whocan', label: 'Who Can Participate?', type: 'radio'},
    inviteothers: {id: 'inviteothers', label: 'Participants can invite other participants', type: 'checkbox'},
    details: {id: 'desc', label: 'Details', type: 'textarea'},
    tags: {id: 'tags', label: 'Tags', type: 'input'}
  };
    */
    var contestData = {name: 'Crazy Fools', tagl:'Craziest Zing Ever', sd:'1/12/2012',
                       ed:'2/18/2012', sed:'1/30/2012', ctype: '1', etype:'1', whocan: '1',
                       inviteothers: '1',
                       desc: '<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; background-position: initial initial; margin: 8px;\">\n<p>&nbsp;</p>\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<div style=\"color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; background-image: initial; background-repeat: initial; background-attachment: initial; -webkit-background-clip: initial; -webkit-background-origin: initial; background-color: #ffffff; outline-width: 0px; outline-style: initial; outline-color: initial; margin: 8px;\">\n<p>this is not the description</p>\n<hr style=\"cursor: default;\" />\n<p><img style=\"border-style: initial; border-color: initial; cursor: default; border-width: 0px;\" title=\"Embarassed\" src=\"file:///Users/sunilmasand/za/za/client/plugins/tinymce/jscripts/tiny_mce/plugins/emotions/img/smiley-embarassed.gif\" alt=\"Embarassed\" border=\"0\" />&nbsp;Must join this contest!!!! Its a lot of fun</p>\n<h1 style=\"font-size: 2em;\">BOOOOOOO.... Join Because</h1>\n<ol>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You will love it</span></li>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You are insane</span></li>\n<li><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">You are stupid</span></li>\n</ol>\n<div><hr style=\"cursor: default;\" /><span class=\"Apple-style-span\" style=\"font-size: xx-small;\">&radic; this is a special character</span></div>\n</div>\n</div>\n</div>\n<p>&nbsp;</p>\n</div>',
                       tags: 'these are tags'
                       };
    
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
      za.CreateContest({parentid: parentid});
    });
    $editbutton.button({label: 'Edit Contest'});
    $parentdiv.append($editbutton);
  };
  za.ViewContest = ViewContest;
}(jQuery));
