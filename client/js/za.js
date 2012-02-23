'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  
  za.configType = 'DEV';
  //za.configType = 'STAGE';
  
  za.appId = '';
  za.fbScope = 'email,publish_stream,read_friendlists,user_photos,user_videos,user_birthday,friends_birthday,user_photo_video_tags,offline_access';
  za.userFbId = '100000581992971';
  za.userFbName = '';
  za.serverUri = '';
  za.redirectUri = '';
  
  za.configDev = {
    appId : '318117531546857',
   // redirectUri : 'http://localhost:8888/client/html/'
    redirectUri : 'http://localhost:8888/za/',
    serverUri : 'http://localhost:8888/za/backend/index.php'
  };
  
  za.configStage = {
    appId : '188092504602584',
    //redirectUri : 'http://www.whatsyourzing.com/sangeeta/za/client/html/'
    redirectUri : 'http://www.whatsyourzing.com/sangeeta/za/',
    serverUri : 'http://www.whatsyourzing.com/sangeeta/za/backend/index.php'
  }
  
  za.getConfig = function() {
    return ((za.configType === 'DEV') ? za.configDev : za.configStage);
  }
  
  za.getAppId = function() {
    if (za.appId === 'undefined' || za.appId === '') {
      za.appId = za.getConfig().appId;
    }
    return za.appId;
  }
  
  za.getRedirectUri = function() {
    if (za.redirectUri === 'undefined' || za.redirectUri === '') {
      var config = za.getConfig();
      za.redirectUri = za.getConfig().redirectUri;
    }
    return za.redirectUri;
  }
  
  za.getServerUri = function() {
    if (za.serverUri === 'undefined' || za.serverUri === '') {
      var config = za.getConfig();
      za.serverUri = za.getConfig().serverUri;
    }
    return za.serverUri;
  }
  
  za.getFbScope = function () {
    return fbScope;
  }
  
  za.getUser = function () {
    if (za.userFbId === 'undefined' || za.userFbId === '') {
       //TODO Make server call and get userid
    }
    return za.userFbId;
  }
  za.menus = {
    home: {display: 'Home', href: '#za-home'},
    contests: {display: 'Contests', href: '#za-contests'},
    gallery: {display: 'Gallery', href: '#za-gallery'},
    hall: {display: 'Hall of Fame', href: '#za-hall'},
    coins: {display: 'Get Zing Coins', href: '#za-coins'},
    invite: {display: 'Invite', href: '#za-invite'},
	vote: {display: 'Invite to Contest', href: '#za-vote'}
  };
  
  za.showPanel = function(menuid) {
    if (menuid === 'home') { za.Home({parentid: menuid});};
    if (menuid === 'contests') { za.Contests({parentid: menuid});};
    if (menuid === 'gallery') { za.Gallery({parentid: menuid}); };
    if (menuid === 'hall') { za.Hall({parentid: menuid}); };
    if (menuid === 'coins') { za.Coins({parentid: menuid}); };
    if (menuid === 'invite') { za.Invite({parentid: menuid}); };
    if (menuid === 'vote') { za.Vote({parentid: menuid}); };
  };
  

  za.jq = function jq(myid) { 
    return '#' + myid.replace(/(:|\.)/g,'\\$1');
  };
  
  za.buttons = {
    createcontest: {id: 'create-contest', label: 'Create Contest'},
    finishcontest: {id: 'finish-contest', label: 'Finish and Invite'},
    savecontest: {id: 'save-contest', label: 'Save Draft'},
    submitentry: {id: 'submit-entry', label: 'Submit Entry'},
    finishentrysubmit: {id: 'fin-submit-entry', label: 'Finish'}
  };
  
  za.entrytypes = {
    picture: {id: 'picture-entry', label: 'Picture', value: '0'},
    video: {id: 'video-entry', label: 'Video', value: '1'},
    text: {id: 'text-entry', label: 'Text', value: '2'}
  };
  
  za.whocanpart = {
    everyone: {id: 'part-all', label: 'Everyone', value: '0'},
    restricted: {id: 'par-rest', label: 'Invitees Only', value: '1'}
  };
 
  za.contestattrs = {
    id: {id: 'cid'},
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
    tags: {id: 'tags', label: 'Tags', type: 'input'},
    numparts: {id: 'numparts'},
    fbpartid: {id: 'fbpid'},
    fbpartname: {id: 'fbpname'},
    status: {id: 'status'}
  };
  
  za.conteststatus = {
    draft: {id: 0},
    final: {id: 1}
  };
  
  za.entryattrs = { //used for contests gallery as well as contest details gallery
    id: {id: 'eid'}, 
    url: {id: 'url'}, //url of entry
    thumbnail: {id: 'thumb'}, //thumbnail of entry
    title: {id: 'title'},
    fbpartid: {id: 'fbpid'},
    partname: {id: 'fbpname'},
    parturl: {id: 'fbpurl'}, //url of participant
    cid: {id: 'cid'}, //contest id
    contesttitle: {id: 'ctitle'},
    numparts: {id: 'numparts'},
    myvote: {id: 'myvote'}
  };

  za.entrystats = {
    votes: {id: 'votes'},
    likes: {id: 'likes'},
    comments: {id: 'comments'},
    gifts: {id: 'gifts'},
    boos: {id: 'boos'},
    rank: {id: 'rank'},
    trend: {id: 'trend'}
  };
  $.fn.qtip.styles.mystyle = { // Last part is the name of the style
   width: 200,
   background: '#A2D959',
   color: 'black',
   textAlign: 'center',
   border: {
      width: 7,
      radius: 5,
      color: '#A2D959'
   },
   tip: 'bottomLeft',
   name: 'dark' // Inherit the rest of the attributes from the preset dark style
  };
  //$.fn.qtip.zindex = 1000000;

  za.buildCreateContestTooltip = function() {
    var attrs = za.contestattrs;
    var content;
    $.each(attrs, function(idx, attr) {
      switch (idx) {
        case 'title':
          content = 'Short and sweet is best';
          break;
        case 'tagline':
          content = 'Make it fun... add a cool tag line!';
          break;
        case 'details':
          content: 'Add details you wish to share ... rules, organizer details, prizes, if any.'
          break;
        default:
          content = '';
          break;
      };
      if (content !== '' && content !== 'undefined') {
        var $field = $(za.jq(attrs[idx].id));
        if (idx !== 'details') {//$field = $("#desc_ifr");
          $field.qtip({
            content: content,
            show: 'mouseover',
            hide: 'mouseout',
            style: 'mystyle'
          });
        };
              
      };
    });
  };
  
  za.galleryTypes = {
    entrydetail: {id: 'a', cName: 'big-gallery'},
    hthumb: {id: 'b', cName: 'h-thumb-gallery'},
    vthumb: {id: 'c', cName: 'v-thumb-gallery'},
    contests: {id: 'd', cName: 'med-gallery'}
  };
  
  za.addGalleryInfo = function(entry, galleryType) {
    var attrs = za.entryattrs;
    var $divinfo = $('<div style="width:200px; height:50px; z-index: 99999;"></div>');
    if (galleryType === za.galleryTypes['entrydetail']) {
      $divinfo.append($('<input class="entry-id" type="hidden" value="'+entry[attrs.id.id]+'" />'));
    } else if (galleryType === za.galleryTypes['contests']) {
      attrs = za.contestattrs;
      $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;">'+entry[attrs.title.id]+'</span>'));
      $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;">'+entry[attrs.numparts.id]+'</span>'));
      $divinfo.append($('<input class="contest-title" type="hidden" value="'+entry[attrs.title.id]+'" />'));
      $divinfo.append($('<input class="contest-id" type="hidden" value="'+entry[attrs.id.id]+'" />'));
      $divinfo.append($('<input class="contest-type" type="hidden" value="'+entry[attrs.entrytype.id]+'" />'));
      $divinfo.append($('<a href="#">Submit Entry</a>'));
    }
    $divinfo.append($('<input class="fbuser-id" type="hidden" value="'+entry[attrs.fbpartid.id]+'" />'));
    return $divinfo;
  };
  
  za.buildAnythingSliderGallery = function(galleryid, galleryType, entries) {    
    var $ul = $('<ul id="'+galleryid+'" class="'+galleryType.cName+'"></ul>');

    var attrs = za.entryattrs;
    $.each(entries, function(idx, entry){
      var $li = $('<li></li>');
      
	  if(galleryType === za.galleryTypes['hthumb'] || galleryType === za.galleryTypes['vthumb']){
            $li.addClass('thumbDim'); // Added class thumbDim to set dimension of thumbnail
	  } else if (galleryType === za.galleryTypes['entrydetail'] ){	// Added class previewHeight to set height of preview image
   	    $li.addClass('previewHeight');
	  }
		  
      var $div = $('<div class="gallery-div"></div>');

      var imgId = 'gimg' + galleryType.id + idx;
      $div.append($('<img class="main-img" id="'+imgId+'" src="'+entry[attrs.url.id]+'" />'));

      if (galleryType !== za.galleryTypes['vthumb'] && galleryType !== za.galleryTypes['hthumb']) {
        $div.append(za.addGalleryInfo(entry, galleryType));
      } ;

      $li.append($div);
      $ul.append($li);     
    });
    
    return $ul;
  };
  
  za.buildRatingPanel = function(args) {
    //var entryId = args.entryId;
    var partName = args.partName;
    var $rateRoot = $('<div id="rate-root"></div>');
    $rateRoot.append($('<div class="rate-panel-title">Vote For '+partName+'</div>'));
    //$rateRoot.append($('<span class="no">No Zing</span>'));
    
    for (var i=0; i<=11; i++) {
      var id = "rating-rating-"+i;
      var label = i;
      if (i === 0) {
        $rateRoot.append($('<label for="'+id+'" class="rating-button">No Zing</label>'));
      } else if (i === 11) {
        $rateRoot.append($('<label for="'+id+'" class="rating-button">Sizzling</label>'));
      } else {
        $rateRoot.append($('<label for="'+id+'" class="rating-button">'+label+'</label>'));
      }
      var $input = $('<input type="radio" name="rating" value="'+i+'" id="'+id+'" value="'+i+'" />');
      $input.bind('click', function() {
        if ($('input[name="rating"]:checked').val() === '0') {
          $("#rating-rating-1").attr('checked','checked');
          $("#rating-rating-1").button('refresh');
        } else if ($('input[name="rating"]:checked').val() === '11') {
          $("#rating-rating-10").attr('checked','checked');
          $("#rating-rating-10").button('refresh');
        } 
        alert($('input[name="rating"]:checked').val() + " was clicked");
        var obj = {};
        obj['op'] = 'save_vote';
        obj['eid'] = $("#entry-id").val();
        obj['voterid'] = za.userFbId;
        obj['vote'] = $('input[name="rating"]:checked').val();
        alert("obj being passed is " + JSON.stringify(obj));
        $.post( za.getServerUri(), obj, 
            function(data) {
                alert('response received ' + JSON.stringify(data));
                var rows = data['result'];
                var vote_count = 0;
                var vote_average = 0;
                if (rows.length === 1) {
                  $.each(rows, function(i, row) {
                    vote_count = row.num_votes;
                    vote_average = row.vote_average;
                  });
                  za.showRatingInfo('gallery1', vote_count, vote_average, 1, '');
                  $("#rate-root").hide();
                }
            }, "json");
      });
      $rateRoot.append($input);
    }
    
    return $rateRoot;
  };
  
  za.showRatingInfo = function(galleryid, voteCount, score, rank, trend) {
    rank = 3;
    if ($(".rating-info")) $(".rating-info").remove();
    var $div = $('<div class="rating-info"></div>');
    $div.append($('<div class="votes"></div>'));
    $div.append($('<span class="avg-score">'+score+'</span>'));
    $div.append($('<span class="vote-count">'+voteCount+' votes</span>'));
    $div.append($('<div class="rank">#'+rank+'</div>'));
    $div.append($('<div class="img-trend"></div>'));
    $(za.jq(galleryid)).parent().append($div);
  };
  za.addSrc = function(element) {
    if (element.attr('src') === '') {
      var newsrc = element.attr('data-src');
      if (newsrc !== '') element.attr('src', newsrc);
      // show loading message
      $('.message').html('loading: ' + newsrc).stop(true,true).fadeIn().delay(2000).fadeOut();
    };
  };
    
  za.removeSrc = function(element) {
    var newsrc = element.attr('data-src');
    if (newsrc !== '') { element.attr('src', newsrc); element.attr('data-src', ''); }
  };
    
  za.removeSrcOnSliderInit = function(slider) {
    var start = slider.options.startPanel;
      slider.$el.find('.panel').eq(start).siblings(':not(.activePage)').find('img').each(function(){ za.removeSrc($(this)); });
      if (slider.options.showMultiple === 3) {
        slider.$el.find('.activePage').next().find('img').each(function(){ za.addSrc($(this));});
        slider.$el.find('.activePage').next().next().find('img').each(function(){ za.addSrc($(this));});
      };
  };
    
  za.addSrcOnSlideInit = function(slider) {
    slider.$targetPage.find('img').each(function(){ za.addSrc($(this)); });
    if (slider.options.showMultiple === 3) {
      slider.$targetPage.next().find('img').each(function(){ za.addSrc($(this)); });
      slider.$targetPage.next().next().find('img').each(function(){ za.addSrc($(this)); });
    };
  };
    
  za.removeSrcOnSlideComplete = function(slider) {
    slider.$currentPage.find('img').each(function() { za.removeSrc($(this)); });
    if (slider.options.showMultiple === 3) {
      slider.$currentPage.next().find('img').each(function() { za.removeSrc($(this)); });
      slider.$currentPage.next().next().find('img').each(function() { za.removeSrc($(this)); });
    };
  };
  
  za.inviteToContest = function() {
    var message = 'Participate in my exciting new contest: Zing of the Month';
    alert("Inviting for " + za.tempvars['contestid']);
    FB.ui({method: 'apprequests',
      message: message
    }, za.requestCallbackForContestInvite)
  };
    
  za.requestCallbackForContestInvite = function(response) {
    alert(" response is " + JSON.stringify(response));
    if (response['request'] === null || response['request'] === undefined) {
      return;
    }
    var obj = {};
    obj['op'] = 'contest_invite';
    obj['reqid'] = response['request'];
    obj['user_ids'] = response['to'];
    obj['objid'] = za.tempvars.contestid;
    obj['type'] = 0;
    alert("obj being passed is " + JSON.stringify(obj));
    $.post( za.getServerUri(), obj,
          function(data) {
              alert('response received ' + JSON.stringify(data));
              return false;
          } );
  };
  
  za.inviteToApp = function() {
    var message = 'Checkout this cool new app';
    FB.ui({method: 'apprequests',
      message: message
    }, za.requestCallbackForAppInvite)
  };
    
  za.requestCallbackForAppInvite = function(response) {
    /*
    alert(" response is " + JSON.stringify(response));
    var obj = {};
    obj['op'] = 'contest_invite';*/
    alert("submitting invites");
    $.post( za.getServerUri(), obj,
          function(data) {
              alert('response received ' + JSON.stringify(data));
              //sendContestRequest();
              return false;
          } );
    //probably not necessary to store app invites?
  };
  
  za.getUserInfo = function(resonse) {
    var data = 'op=get_user_info';
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(serverdata)          //on recieve of reply
      {
        // the following line is temporarily commented. for now it will use the hardcoded value of za.userFbId
        //za.userFbId = serverdata['id'];
        za.userFbName = serverdata['name'];
        za.MenuTabs();
      }
    });
  }
  za.tempvars = {
    entryid: '',
    contestsub: 'browse',
    contestid: ''
  };
}(jQuery));
