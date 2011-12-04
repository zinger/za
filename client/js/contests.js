'use strict';
  
(function($){
  var Contests = function(args) {
    var parentid = args.id;
    var $parentdiv = $( za.jq(parentid) );
    
    var $createContestButton = $('<input id="'+za.buttons['createcontest'].id+'" type="button" />') ;
    
    $createContestButton.button({label: za.buttons['createcontest'].label});
    
    $parentdiv.append($createContestButton);
    
    $createContestButton.bind('click', function(){
      $parentdiv.empty();
      za.CreateContest({id: parentid});
    });
    
    var pictureEntries = [];
    pictureEntries.push({id: '1', url: '../../samplecontent/images/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '2', url: '../../samplecontent/images/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '3', url: '../../samplecontent/images/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '4', url: '../../samplecontent/images/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', fbpid: 'User4', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '5', url: '../../samplecontent/images/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', fbpid: 'User5', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '6', url: '../../samplecontent/images/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title1', fbpid: 'User6', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '7', url: '../../samplecontent/images/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title1', fbpid: 'User7', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '8', url: '../../samplecontent/images/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', fbpid: 'User8', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    
    var galleryid = 'gallery1';
    $parentdiv.append(za.buildAnythingSliderGallery(galleryid, za.galleryTypes['contests'].id, pictureEntries));
    $(za.jq(galleryid)).anythingSlider({
	    	showMultiple: 3, buildNavigation: false, buildStartStop: false, changeBy: 3,
                navigationFormatter : function(i, panel){
                  return '<img src="'+pictureEntries[i].thumb+'">'; }
    });    
  };
  za.Contests = Contests;
}(jQuery));