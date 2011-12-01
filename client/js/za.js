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
  
}(jQuery));