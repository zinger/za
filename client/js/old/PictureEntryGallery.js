'use strict';
  
(function($){
  var PictureEntryGallery = function(args) {
    var $parentdiv = $( za.jq(args.id) );
    var galleryid = args.galleryid;
    var entries = args.entries;
        
    var $slider = $('<div id="'+galleryid+'" class="royalSlider default">');
    var $ul = $('<ul class="royalSlidesContainer">');
    
    var pictureEntries = [];
    pictureEntries.push({entryId: '1', entryUrl: '../../samplecontent/images/1.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', partFbUserId: 'User1', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '2', entryUrl: '../../samplecontent/images/2.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', partFbUserId: 'User2', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '3', entryUrl: '../../samplecontent/images/3.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', partFbUserId: 'User3', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '4', entryUrl: '../../samplecontent/images/4.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', partFbUserId: 'User4', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '5', entryUrl: '../../samplecontent/images/5.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', partFbUserId: 'User5', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '6', entryUrl: '../../samplecontent/images/6.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title1', partFbUserId: 'User6', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '7', entryUrl: '../../samplecontent/images/7.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title1', partFbUserId: 'User7', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({entryId: '8', entryUrl: '../../samplecontent/images/8.jpg', thumbnailUrl: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', partFbUserId: 'User8', partName: 'Lucky Walker', partUrl: '../../samplecontent/images/thumbnails/1.jpg' });
    var contestTitle = 'Zing of the month';
    var voteCount = 20;
    var likeCount = 20;
    var commentCount = 5;
    var giftCount = 20;
    var score = 8.5;
    var booCount = 15;
    var rank = 3;
    var trend = '0';
    
    $parentdiv.append('<div class="contest-title">'+contestTitle+'</div>');

    $submitEntry = $('<button class="submitEntryButton" id="'+za.buttons['submitentry'].id+'"/>');
    $submitEntry.button({label: za.buttons['submitentry'].label});
    $submitEntry.bind('click', function() { alert("Submit Entry Button Clicked");});
    $parentdiv.append($submitEntry);

    for (var i=0; i<pictureEntries.length; i++) {
      var $li = $('<li class="royalSlide" data-thumb="'+pictureEntries[i].thumbnailUrl+'"></li>');
      var $div = $('<div class="centeredSlide"></div>');
      $div.append($('<img class="imageItem" src="'+pictureEntries[i].entryUrl+'" width="600" height="260" />'));
      $div.append($('<img class="imageItem" src="'+pictureEntries[i].partUrl+'" width="40" height="40" style="position: absolute; top: 260px; left: 0px; padding: 0; margin:0"/>'));

      $div.append($('<input class="entry-id" type="hidden" value="'+pictureEntries[i].entryId+'" />'));
      $div.append($('<input class="fbuser-id" type="hidden" value="'+pictureEntries[i].partFbUserId+'" />'));
      
      var $divinfo = $('<div class="slideTextBlock" width="540"></div>');
      $divinfo.append($('<span style="position: absolute; top: 265px; left: 45px; color: #ffffff; z-index: 99999; font-size: 0.8em;">'+pictureEntries[i].partName+'</span>'));
 //     $divinfo.append($('<img src="'+))
      $div.append($divinfo);
      $li.append($div);

      $ul.append($li);
    }

    $slider.append($ul);
    $parentdiv.append($slider);

    $(za.jq(galleryid)).royalSlider({
	    	captionShowEffects:["fade"],
			controlNavThumbs:true,			
			imageAlignCenter:true,	
			directionNavEnabled: true,
			welcomeScreenEnabled:false,
			hideArrowOnLastSlide:true,
			dragUsingMouse:false
    });
    return $slider;
  };
  za.PictureContestDetail = PictureContestDetail;
}(jQuery));