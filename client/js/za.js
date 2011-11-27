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
  
  za.createcontestlabel = 'Create Contest';
  za.finishcontestlabel = 'Finish';
  za.savecontestlabel = 'Save Draft';
  
  za.entrytypes = { picture: '0', video: '1', text: '2'};

  
  za.contestattrs = {
    title: 'name',
    tagline: 'tag_line',
    startdate: 'start_date',
    enddate: 'end_date',
    entrydeadline: 'submission_end_date',
    iscaption: 'contest_type',
    pictureurl: 'url',
    entrytype: 'entry_type',
    details: 'description',
    tags: 'tags'
  };
}(jQuery));
