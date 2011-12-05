'use strict';
  
(function($){
  var PictureContestDetail = function(args) {
    var $parentdiv = $( za.jq(args.id) );
    var galleryid = args.galleryid;
    var contestid = args.contestid;
    
    var pictureEntries = [];
    pictureEntries.push({id: '1', url: '../../samplecontent/images/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '2', url: '../../samplecontent/images/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '3', url: '../../samplecontent/images/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '4', url: '../../samplecontent/images/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', fbpid: 'User4', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '5', url: '../../samplecontent/images/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', fbpid: 'User5', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '6', url: '../../samplecontent/images/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title1', fbpid: 'User6', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '7', url: '../../samplecontent/images/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title1', fbpid: 'User7', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    pictureEntries.push({id: '8', url: '../../samplecontent/images/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', fbpid: 'User8', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    var contestTitle = 'Zing of the month';
    var voteCount = 20;
    var likeCount = 20;
    var commentCount = 5;
    var giftCount = 20;
    var score = 8.5;
    var booCount = 15;
    var rank = 3;
    var trend = '0';
    
    var thumbnailEntries = [];
    thumbnailEntries.push({id: '1', url: '../../samplecontent/images/thumbnails/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '2', url: '../../samplecontent/images/thumbnails/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '3', url: '../../samplecontent/images/thumbnails/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '4', url: '../../samplecontent/images/thumbnails/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', fbpid: 'User4', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '5', url: '../../samplecontent/images/thumbnails/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', fbpid: 'User5', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '6', url: '../../samplecontent/images/thumbnails/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title1', fbpid: 'User6', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '7', url: '../../samplecontent/images/thumbnails/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title1', fbpid: 'User7', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '8', url: '../../samplecontent/images/thumbnails/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', fbpid: 'User8', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    $parentdiv.append('<div class="contestTitle">'+contestTitle+'</div>');

    $submitEntry = $('<button class="submitEntryButton" id="'+za.buttons['submitentry'].id+'"/>');
    $submitEntry.button({label: za.buttons['submitentry'].label});
    $submitEntry.bind('click', function() { alert("Submit Entry Button Clicked");});
    $parentdiv.append($submitEntry);

    $parentdiv.append(za.buildAnythingSliderGallery(galleryid, za.galleryTypes['entrydetail'].id, pictureEntries));
    $(za.jq(galleryid)).anythingSlider({
      showMultiple: false, buildStartStop: false, buildArrows: true, buildNavigation: false, 
    });

    
    
    $parentdiv.append(za.buildAnythingSliderGallery("thumbnail1", za.galleryTypes['hthumb'].id, thumbnailEntries));
    $(za.jq("thumbnail1")).anythingSlider({
      showMultiple: 3, buildNavigation: false, buildStartStop: false, changeBy: 3//, vertical: true
    });
    
    $(".galleryDiv").click(function() {
      var idx = $(this).children('img.mainImg').first().attr('id').substring(5);
      idx = parseInt(idx) + 1;
      $('#mygallery').anythingSlider(idx);
      return false;
    });
    $pagination = $('<div class="pagination"></div>');
    $first = $('<a href="#" class="first" data-action="first">&laquo;</a>');
    $previous = $('<a href="#" class="previous" data-action="previous">&lsaquo;</a>');
    $pagetext = $('<input type="text" readonly="readonly" data-max-page="40" />');
    $next = $('<a href="#" class="next" data-action="next">&rsaquo;</a>');
    $last = $('<a href="#" class="last" data-action="last">&raquo;</a>');
    
    $pagination.append($first).append($previous).append($pagetext).append($next).append($last);
    $parentdiv.append($pagination);
    
    $('.pagination').jqPagination({
      paged: function(page) {
	var idx = parseInt(page) * 3;
	  $("#thumbnail1").anythingSlider(idx);
      }
    });
  };
  za.PictureContestDetail = PictureContestDetail;
}(jQuery));