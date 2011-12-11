'use strict';
  
(function($){
  var Contests = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    
    $parentdiv.append($('<div class="page-title">Browse Contests</div>'));
    
    $searchform = $('<form action="" id="search-form"></form>');
    $fieldset = $('<fieldset><input type="text" id="search" name="search" /><input type="submit" id="search-submit" value="" /></fieldset>');
    $searchform.append($fieldset);
    
    $parentdiv.append($searchform);
    
    $("#search").val("Search...").addClass("empty");
	// When you click on #search
	$("#search").focus(function(){
		// If the value is equal to "Search..."
		if($(this).val() == "Search...") {
			// remove all the text and the class of .empty
			$(this).val("").removeClass("empty");;
		}
	});
	// When the focus on #search is lost
	$("#search").blur(function(){
		// If the input field is empty
		if($(this).val() == "") {
			// Add the text "Search..." and a class of .empty
			$(this).val("Search...").addClass("empty");
		}
	});
    
    $parentdiv.append($('<div><span>Host in 60 seconds! It\'s Free!!</span></div>'));
    var $createContestButton = $('<input id="'+za.buttons['createcontest'].id+'" type="button" />') ;
    
    $createContestButton.button({label: za.buttons['createcontest'].label});
    
    $parentdiv.append($createContestButton);
    
    $createContestButton.bind('click', function(){
      $parentdiv.empty();
      za.CreateContest({parentid: parentid});
    });
    
    var pictureEntries = [];
    pictureEntries.push({eid: '1', url: '../../samplecontent/images/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest' });
    pictureEntries.push({eid: '2', url: '../../samplecontent/images/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '2', ctitle: 'Zing of The Month'   });
    pictureEntries.push({eid: '3', url: '../../samplecontent/images/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });
    pictureEntries.push({eid: '4', url: '../../samplecontent/images/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', fbpid: 'User4', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '3', ctitle: 'Monuments'   });
    pictureEntries.push({eid: '5', url: '../../samplecontent/images/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', fbpid: 'User5', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '4', ctitle: 'Historic Moments'   });
    pictureEntries.push({eid: '6', url: '../../samplecontent/images/6.jpg', thumb: '../../samplecontent/images/thumbnails/6.jpg', title: 'Title1', fbpid: 'User6', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });
    pictureEntries.push({eid: '7', url: '../../samplecontent/images/7.jpg', thumb: '../../samplecontent/images/thumbnails/7.jpg', title: 'Title1', fbpid: 'User7', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });
    pictureEntries.push({eid: '8', url: '../../samplecontent/images/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', fbpid: 'User8', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });
    pictureEntries.push({eid: '9', url: '../../samplecontent/images/8.jpg', thumb: '../../samplecontent/images/thumbnails/8.jpg', title: 'Title1', fbpid: 'User8', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });

    var galleryid = 'gallery1';
    
    $parentdiv.append(za.buildAnythingSliderGallery(galleryid, za.galleryTypes['contests'], pictureEntries));
    $(za.jq(galleryid)).anythingSlider({
	    	showMultiple: 3, buildNavigation: false, buildStartStop: false, changeBy: 3, infiniteSlides: false,
                onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); },
                onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); },
	        onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider); }
    });
    
    $("#gallery1 .gallery-div").click(function() {
      var entryid = $(this).find('.entry-id').first().val();
      var contestid = $(this).find('.contest-id').first().val();
      $parentdiv.empty();
      za.PictureContestDetail({parentid: parentid, contestid: contestid, entryid: entryid});
    });
    
    //$('#slider1').append('<li><img src="some-image.jpg" alt="" /></li>').anythingSlider(); // update the slider
  };
  za.Contests = Contests;
}(jQuery));