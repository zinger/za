'use strict';
  
(function($){
  var PictureContestDetail = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid));
    var entryid = args.entryid;
    var contestid = args.contestid;
    var invokedBy = args.invokedBy;

    // TODO: Using the contestid we need to get all entries for the contest
    // TODO: We need to set the active page of the slider using the entry id
    
    var pictureEntries = [];
    pictureEntries.push({eid: '1', url: '../../samplecontent/images/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'fbpname 1', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest', myvote: 5 });
    pictureEntries.push({eid: '2', url: '../../samplecontent/images/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title2', fbpid: 'User2', fbpname: 'fbpname 2', fbpurl: '../../samplecontent/images/thumbnails/2.jpg', numparts: 55, cid: '2', ctitle: 'Zing of The Month', myvote: 6   });
    pictureEntries.push({eid: '3', url: '../../samplecontent/images/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title3', fbpid: 'User3', fbpname: 'fbpname 3', fbpurl: '../../samplecontent/images/thumbnails/3.jpg', numparts: 55, cid: '3', ctitle: 'Wierd Hairdo Contest' , myvote: 6  });
    pictureEntries.push({eid: '4', url: '../../samplecontent/images/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title4', fbpid: 'User4', fbpname: 'fbpname 4', fbpurl: '../../samplecontent/images/thumbnails/4.jpg', numparts: 55, cid: '4', ctitle: 'Monuments', myvote: 6   });
    pictureEntries.push({eid: '5', url: '../../samplecontent/images/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title5', fbpid: 'User5', fbpname: 'fbpname 5', fbpurl: '../../samplecontent/images/thumbnails/5.jpg', numparts: 55, cid: '5', ctitle: 'Historic Moments', myvote: -1});
    pictureEntries.push({eid: '6', url: '../../samplecontent/images/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title6', fbpid: 'User6', fbpname: 'fbpname 6', fbpurl: '../../samplecontent/images/thumbnails/6.jpg', numparts: 55, cid: '6', ctitle: 'Wierd Hairdo Contest', myvote: -1   });
    pictureEntries.push({eid: '7', url: '../../samplecontent/images/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title7', fbpid: 'User7', fbpname: 'fbpname 7', fbpurl: '../../samplecontent/images/thumbnails/7.jpg', numparts: 55, cid: '7', ctitle: 'Wierd Hairdo Contest', myvote: -1   });
    pictureEntries.push({eid: '8', url: '../../samplecontent/images/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title8', fbpid: 'User8', fbpname: 'fbpname 8', fbpurl: '../../samplecontent/images/thumbnails/8.jpg', numparts: 55, cid: '8', ctitle: 'Wierd Hairdo Contest', myvote: -1   });
    pictureEntries.push({eid: '9', url: '../../samplecontent/images/9.jpg', thumb: '../../samplecontent/images/thumbnails/9.jpg', title: 'Title9', fbpid: 'User9', fbpname: 'fbpname 9', fbpurl: '../../samplecontent/images/thumbnails/9.jpg', numparts: 55, cid: '9', ctitle: 'Wierd Hairdo Contest', myvote: -1   });
    pictureEntries.push({eid: '10', url: '../../samplecontent/images/10.jpg', thumb: '../../samplecontent/images/thumbnails/10.jpg', title: 'Title10', fbpid: 'User10', fbpname: 'fbpname 10', fbpurl: '../../samplecontent/images/thumbnails/10.jpg', numparts: 55, cid: '10', ctitle: 'Wierd Hairdo Contest' , myvote: -1  });
    pictureEntries.push({eid: '11', url: '../../samplecontent/images/11.jpg', thumb: '../../samplecontent/images/thumbnails/11.jpg', title: 'Title11', fbpid: 'User11', fbpname: 'fbpname 11', fbpurl: '../../samplecontent/images/thumbnails/11.jpg', numparts: 55, cid: '11', ctitle: 'Wierd Hairdo Contest', myvote: 6   });
    pictureEntries.push({eid: '12', url: '../../samplecontent/images/12.jpg', thumb: '../../samplecontent/images/thumbnails/12.jpg', title: 'Title12', fbpid: 'User12', fbpname: 'fbpname 12', fbpurl: '../../samplecontent/images/thumbnails/12.jpg', numparts: 55, cid: '12', ctitle: 'Wierd Hairdo Contest' , myvote: 6  });
	
    var contestTitle = 'Zing of the month';
    var voteCount = 20;
    var likeCount = 20;
    var commentCount = 5;
    var giftCount = 20;
    var score = 8.5;
    var booCount = 15;
    var rank = 3;
    var trend = '0';
    var goToSlide = 3;
    var myvote = -1;
    
    var thumbnailEntries = [];
    thumbnailEntries.push({id: '1', url: '../../samplecontent/images/thumbnails/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'fbpname 1', fbpurl: '../../samplecontent/images/thumbnails/1.jpg' });
    thumbnailEntries.push({id: '2', url: '../../samplecontent/images/thumbnails/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title2', fbpid: 'User2', fbpname: 'fbpname 2', fbpurl: '../../samplecontent/images/thumbnails/2.jpg' });
    thumbnailEntries.push({id: '3', url: '../../samplecontent/images/thumbnails/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title3', fbpid: 'User3', fbpname: 'fbpname 3', fbpurl: '../../samplecontent/images/thumbnails/3.jpg' });
    thumbnailEntries.push({id: '4', url: '../../samplecontent/images/thumbnails/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title4', fbpid: 'User4', fbpname: 'fbpname 4', fbpurl: '../../samplecontent/images/thumbnails/4.jpg' });
    thumbnailEntries.push({id: '5', url: '../../samplecontent/images/thumbnails/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title5', fbpid: 'User5', fbpname: 'fbpname 5', fbpurl: '../../samplecontent/images/thumbnails/5.jpg' });
    thumbnailEntries.push({id: '6', url: '../../samplecontent/images/thumbnails/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title6', fbpid: 'User6', fbpname: 'fbpname 6', fbpurl: '../../samplecontent/images/thumbnails/6.jpg' });
    thumbnailEntries.push({id: '7', url: '../../samplecontent/images/thumbnails/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title7', fbpid: 'User7', fbpname: 'fbpname 7', fbpurl: '../../samplecontent/images/thumbnails/7.jpg' });
    thumbnailEntries.push({id: '8', url: '../../samplecontent/images/thumbnails/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title8', fbpid: 'User8', fbpname: 'fbpname 8', fbpurl: '../../samplecontent/images/thumbnails/8.jpg' });
	thumbnailEntries.push({id: '9', url: '../../samplecontent/images/thumbnails/9.jpg', thumb: '../../samplecontent/images/thumbnails/9.jpg', title: 'Title9', fbpid: 'User9', fbpname: 'fbpname 9', fbpurl: '../../samplecontent/images/thumbnails/9.jpg' });
	thumbnailEntries.push({id: '10', url: '../../samplecontent/images/thumbnails/10.jpg', thumb: '../../samplecontent/images/thumbnails/10.jpg', title: 'Title10', fbpid: 'User10', fbpname: 'fbpname 10', fbpurl: '../../samplecontent/images/thumbnails/10.jpg' });
	thumbnailEntries.push({id: '11', url: '../../samplecontent/images/thumbnails/11.jpg', thumb: '../../samplecontent/images/thumbnails/11.jpg', title: 'Title11', fbpid: 'User11', fbpname: 'fbpname 11', fbpurl: '../../samplecontent/images/thumbnails/11.jpg' });
	thumbnailEntries.push({id: '12', url: '../../samplecontent/images/thumbnails/12.jpg', thumb: '../../samplecontent/images/thumbnails/12.jpg', title: 'Title12', fbpid: 'User12', fbpname: 'fbpname 12', fbpurl: '../../samplecontent/images/thumbnails/12.jpg' });

   var $contestTitle = $('<div class="contestTitle">'+contestTitle+'</div>');
    $contestTitle.bind('click', function () {
      $parentdiv.empty();
      za.ViewContest({parentid: parentid});
    });
    $parentdiv.append($contestTitle);
    

    var handleFileSelect = function(evt) {
      $dialog.dialog('open');
            return false;
    };
    if (invokedBy !== 'home') {
      var $submitEntry = $('<button class="submit-entry-button" id="'+za.buttons['submitentry'].id+'"/>');
      $submitEntry.button({label: za.buttons['submitentry'].label});
      $submitEntry.bind('click', function() { 
	$parentdiv.empty();
	za.SubmitEntry({parentid: parentid});
      });
      $parentdiv.append($submitEntry);
    };
    
    $parentdiv.append(za.buildRatingPanel({entryId: '123', partName: 'Lucky'}));
    $("#rate-root").children('input').each(function(i, element){ // this needs to be done after rate-root has been appended to parent
      $(this).button();
    });
    
    var showMiscInfo = function(slider, invokedByInit) {
      if (invokedByInit) var $base = slider.$el.find('.panel').eq(slider.options.startPanel);
      else var $base = slider.$targetPage;
      var myvote;
      $base.find('#myvote').each(function(){ myvote = $(this).val(); })
      if (myvote === '-1') $("#rate-root").show(); else $("#rate-root").hide();
      showRatingInfo();
      $("#gallery1").parent().append($('<div class="send-gift">Send a gift</div>'));
    };
    
    var showRatingInfo = function() {
      if ($(".rating-info")) $(".rating-info").remove();
      var $div = $('<div class="rating-info"></div>');
      $div.append($('<div class="votes"></div>'));
      $div.append($('<span class="avg-score">'+score+'</span>'));
      $div.append($('<span class="vote-count">'+voteCount+' votes</span>'));
      $div.append($('<div class="rank">#'+rank+'</div>'));
      $div.append($('<div class="img-trend"></div>'));
      $("#gallery1").parent().append($div);
    };

	// Preview Gallery
    $parentdiv.append(za.buildAnythingSliderGallery('gallery1', za.galleryTypes['entrydetail'], pictureEntries));
    $("#gallery1").anythingSlider({
      showMultiple: false, buildStartStop: false, buildArrows: true, buildNavigation: false,
      infiniteSlides: false, startPanel: goToSlide,
      onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); showMiscInfo(slider, true); },
      onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); showMiscInfo(slider, false); },
      onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider);}
    });
	$("#gallery1").parent().parent().addClass("infoHeight");	// Added infoHeight class to adjust information shown under preview image

	// Horizontal thumbnail
    $parentdiv.append(za.buildAnythingSliderGallery("thumbnail1", za.galleryTypes['hthumb'], thumbnailEntries));
    $("#thumbnail1").anythingSlider({
      showMultiple: false, buildNavigation: false, buildStartStop: false, changeBy: 7, infiniteSlides: false,//,vertical: true,
                      onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); },
                onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); },
	        onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider); }
    });
    $("#thumbnail1").parent().parent().addClass("horThumb");	// Added horThumb class to relevant properties
	
    $("#thumbnail1 .gallery-div").click(function() {
      var idx = $(this).children('img.main-img').first().attr('id').substring(5);
      idx = parseInt(idx) + 1;
      $('#gallery1').anythingSlider(idx);
      return false;
    });
	
	// Vertical thumbnail
    $parentdiv.append(za.buildAnythingSliderGallery("thumbnail2", za.galleryTypes['vthumb'], thumbnailEntries));
    $("#thumbnail2").anythingSlider({
    showMultiple: false, buildNavigation: false, buildStartStop: false, changeBy: 7, infiniteSlides: false, vertical: true,
		  onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); },
	    onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); },
	    onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider); }
    });
    $("#thumbnail2").parent().parent().addClass("verThumb");	// Added verThumb class to relevant properties
	
    $("#thumbnail2 .gallery-div").click(function() {
      var idx = $(this).children('img.main-img').first().attr('id').substring(5);
      idx = parseInt(idx) + 1;
      $('#gallery1').anythingSlider(idx);
      return false;
    });
	
	// Pagination
    var $paginationContianer = $('<div class="paginationContianer"></div>');	// Created pagination container to right align pagination between preview and thumbnail images
    var $pagination = $('<div class="pagination"></div>');
    var $first = $('<a href="#" class="first" data-action="first">&laquo;</a>');
    var $previous = $('<a href="#" class="previous" data-action="previous">&lsaquo;</a>');
    var $pagetext = $('<input type="text" readonly="readonly" data-max-page="40" />');
    var $next = $('<a href="#" class="next" data-action="next">&rsaquo;</a>');
    var $last = $('<a href="#" class="last" data-action="last">&raquo;</a>');
	var $clr = $('<div class="clr"></div>');	// Created to clear the float effect
    
    $pagination.append($first).append($previous).append($pagetext).append($next).append($last);
    $paginationContianer.append($pagination).append($clr);	// Wrapped pagination to pagination contianer
	
    $(".anythingSlider:eq(0)").after($paginationContianer); // Added pagination between preview and thumbnail images
    
    $('.pagination').jqPagination({
		paged: function(page) {
			var idx = parseInt(page) * 3;
			$("#thumbnail1").anythingSlider(idx);
		}
    });
	
  };
  za.PictureContestDetail = PictureContestDetail;
}(jQuery));