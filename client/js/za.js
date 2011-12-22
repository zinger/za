'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  
  za.configType = 'DEV';
  //za.configType = 'STAGE';
  
  za.redirectUri = '';
  za.appId = '';
  za.fbScope = 'email,publish_stream,read_friendlists,user_photos,user_videos,user_birthday,friends_birthday';
  za.userFbId = '';
  
  za.configDev = {
    appId : '318117531546857',
   // redirectUri : 'http://localhost:8888/client/html/'
    redirectUri : 'http://localhost:8888/za/' 
  };
  
  za.configStage = {
    appId : '188092504602584',
    //redirectUri : 'http://www.whatsyourzing.com/sangeeta/za/client/html/'
    redirectUri : 'http://www.whatsyourzing.com/sangeeta/za/'
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
    home: {display: 'Home', href: '#home'},
    contests: {display: 'Contests', href: '#contests'},
    gallery: {display: 'Gallery', href: '#gallery'}
  };
  
  za.showPanel = function(menuid) {
    if (menuid === 'home') { za.Home({parentid: menuid});};
    if (menuid === 'contests') { za.Contests({parentid: menuid});};
    if (menuid === 'gallery') { za.Gallery({parentid: menuid}); };
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
    restricted: {id: 'par-rest', label: 'Invitees Only', value: '1'},
  };
 
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
    numparts: {id: 'numparts'}
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
      $divinfo.append($('<img src="'+entry[attrs.parturl.id]+'" style="width:40px; height:40px; z-index: 99999;"/>'));
      $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;padding-left: 4px;">'+entry[attrs.partname.id]+'</span>'));
    } else if (galleryType === za.galleryTypes['contests']) {
      $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;">'+entry[attrs.contesttitle.id]+'</span>'));
      $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;">'+entry[attrs.numparts.id]+'</span>'));
      $divinfo.append($('<input class="contest-id" type="hidden" value="'+entry[attrs.cid.id]+'" />'));
      $divinfo.append($('<a href="#">Submit Entry</a>'));
    }
    $divinfo.append($('<input class="entry-id" type="hidden" value="'+entry[attrs.id.id]+'" />'));
    $divinfo.append($('<input class="fbuser-id" type="hidden" value="'+entry[attrs.fbpartid.id]+'" />'));
    return $divinfo;
  };
  
  za.buildAnythingSliderGallery = function(galleryid, galleryType, entries) {    
    var $ul = $('<ul id="'+galleryid+'" class="'+galleryType.cName+'"></ul>');

    var attrs = za.entryattrs;
    $.each(entries, function(idx, entry){

	  if(galleryid == "thumbnail1"){		// Added class thumbDim to set dimension of thumbnail
	      var $li = $('<li class="thumbDim"></li>');
	  }else if(galleryid == "gallery1"){	// Added class previewHeight to set height of preview image
   	  	  var $li = $('<li class="previewHeight"></li>');
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
    var entryId = args.entryId;
    var partName = args.partName;
    var $rateRoot = $('<div id="rate-root"></div>');
    $rateRoot.append($('<div class="rate-panel-title">Vote For '+partName+'</div>'));
    $rateRoot.append($('<span class="no">No Zing</span>'));
    
    for (var i=1; i<=10; i++) {
      var id = "rating-rating-"+i;
      var label = i;
      $rateRoot.append($('<label for="'+id+'">'+label+'</label>'));
      var $input = $('<input type="radio" name="rating" value="1" id="'+id+'" value="'+i+'" class="radio" />');
      $rateRoot.append($input);
      //$rateRoot.append($('<label class="rate-label" id="rating-label-"'+i+'">'));
    }
    $rateRoot.append($('<span class="yes">Sizzling</span>'));
    return $rateRoot;
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
  
  za.tempvars = {
    entryid: '',
    contestsub: 'browse',
    contestid: ''
  };
}(jQuery));
