'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  za.menus = {
    home: {display: 'Home', href: '#home'},
    contests: {display: 'Contests', href: '#contests'},
    gallery: {display: 'Gallery', href: '#gallery'}
  };
  
  za.showPanel = function(menuid) {
    if (menuid === 'home') { za.Home({id: menuid});};
    if (menuid === 'contests') { za.Contests({id: menuid});};
    if (menuid === 'gallery') { za.Gallery({id: menuid}); };
  };
  
  za.jq = function jq(myid) { 
    return '#' + myid.replace(/(:|\.)/g,'\\$1');
  };
  
  za.buttons = {
    createcontest: {id: 'createcontest', label: 'Create Contest'},
    finishcontest: {id: 'finishcontest', label: 'Finish'},
    savecontest: {id: 'savecontest', label: 'Save Draft'},
    submitentry: {id: 'submitentry', label: 'Submit Entry'}
  };
  
  za.entrytypes = {
    picture: {id: 'pictureentry', label: 'Picture', value: '0'},
    video: {id: 'videoentry', label: 'Video', value: '1'},
    text: {id: 'textentry', label: 'Text', value: '2'}
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
    details: {id: 'desc', label: 'Details', type: 'textarea'},
    tags: {id: 'tags', label: 'Tags', type: 'input'}
  };
  
  za.entryattrs = {
    id: {id: 'eid'},
    url: {id: 'url'},
    thumbnail: {id: 'thumb'},
    title: {id: 'title'},
    fbpartid: {id: 'fbpid'},
    partname: {id: 'fbpname'},
    parturl: {id: 'fbpurl'}
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
    entrydetail: {id: '0'},
    hthumb: {id: '1'},
    vthumb: {id: '2'},
    contests: {id: '3'}
  };
  
  za.buildAnythingSliderGallery = function(galleryid, galleryType, entries) {
    var className = 'bigGallery';
    if (galleryType === za.galleryTypes['vthumb'].id) className = 'vThumbGallery';
    else if (galleryType === za.galleryTypes['hthumb'].id) className = 'hThumbGallery';
    else if (galleryType === za.galleryTypes['contests'].id) className = 'medGallery';
    var $ul = $('<ul id="'+galleryid+'" class="'+className+'"></ul>');
    //$ul.css({height: 265, width: 200});

    var attrs = za.entryattrs;
    $.each(entries, function(idx, entry){
      var $li = $('<li></li>');
      var $div = $('<div class="galleryDiv"></div>');
      /*
      if (galleryType === za.galleryTypes['vthumb'].id || galleryType === za.galleryTypes['hthumb'].id)
        $div.css({height: 40, width: 40});
      */
      var imgId;
      imgId = 'gimg' + galleryType + idx;
      $div.append($('<img class="mainImg" id="'+imgId+'" src="'+entry[attrs.url.id]+'" />'));
      $div.append($('<input class="entryid" type="hidden" value="'+entry[attrs.id.id]+'" />'));
      $div.append($('<input class="fbuserid" type="hidden" value="'+entry[attrs.fbpartid.id]+'" />'));
      
      if (galleryType !== za.galleryTypes['vthumb'].id && galleryType !== za.galleryTypes['hthumb'].id) {
        var $divinfo = $('<div style="width:200px; height:50px; z-index: 99999;"></div>');
        $divinfo.append($('<img src="'+entry[attrs.parturl.id]+'" style="width:40px; height:40px; z-index: 99999;"/>'));
        $divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;">'+entry[attrs.partname.id]+'</span>'));
        $div.append($divinfo);
      } ;

      $li.append($div);
      $ul.append($li);     
    });
    
    return $ul;
  };
  
}(jQuery));