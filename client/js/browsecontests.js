'use strict';
  
(function($){
  var BrowseContests = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid));
    
    var data = 'op=get_contests_by_creation_date&status='+za.conteststatus['final'].id;
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      { renderContestGroup(data, 0); }
    });
    
    $parentdiv.append($('<div class="page-title">Browse Contests</div>'));
    
    var $searchform = $('<form action="" id="search-form"></form>');
    var $fieldset = $('<fieldset><input type="text" id="search" name="search" /><input type="submit" id="search-submit" value="" /></fieldset>');
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
    
    var $createContestDiv = $('<div class="create-contest-div"></div>');
    $createContestDiv.append($('<div class="label-host">Host in 60 seconds! It\'s Free!</div>'));
    var $createContestButton = $('<div><input id="'+za.buttons['createcontest'].id+'" type="button" /></div>');
    $createContestButton.button({label: za.buttons['createcontest'].label});
    $createContestDiv.append($createContestButton);
    $parentdiv.append($createContestDiv);
    
    $createContestButton.bind('click', function(){
      $parentdiv.empty();
      za.CreateContest({parentid: parentid});
    });
    
    $parentdiv.append($('<div>Fetching Contest Data</div>'));
    
    var renderContestGroup = function(data, group) {
      var pictureEntries = [];
      $.each(data['result'], function(i, row) {
	var small_url;
	if (row.small_url === undefined || row.small_url === '') {
	  small_url = '../../images/no-img-contest.png';
	} else small_url = row.small_url;
	pictureEntries.push({url: small_url, thumb: small_url, fbpid: row.fb_pid, cid: row.id, name: row.name, etype: row.type});
      });
      buildGallery(pictureEntries, group);
    }

    var categories = [];
    categories.push({text: 'My Contests'});
    categories.push({text: 'New Contests'});
    categories.push({text: 'Recently Concluded'});

    var buildGallery = function(pictureEntries, i) {
      $parentdiv.append($('<div class="contest-category">'+categories[i].text+'</div>'));
      var galleryid = 'gallery'+i;
      $parentdiv.append(za.buildAnythingSliderGallery(galleryid, za.galleryTypes['contests'], pictureEntries));
      $(za.jq(galleryid)).anythingSlider({
	  showMultiple: 3, buildNavigation: false, buildStartStop: false, changeBy: 3, infiniteSlides: false,
	  onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); },
	  onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); },
	  onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider); }
      });
      
      $(za.jq(galleryid)).find('.gallery-div').click(function() {
	var entryid = $(this).find('.entry-id').first().val();
	var contestid = $(this).find('.contest-id').first().val();
	var type = $(this).find('.contest-type').first().val();
	var title = $(this).find('.contest-title').first().val();
	$parentdiv.empty();
	alert("title is " + title);
	if (type === za.entrytypes['picture'].value) PictureContestDetail({parentid: parentid, contestid: contestid, contestTitle: title});
	else if (type === za.entrytypes['text'].value) za.TextContestDetail({parentid: parentid, contestid: contestid, contestTitle: title});
	else za.PictureContestDetail({parentid: parentid, contestid: contestid, contestTitle: title});
      });
    };
  };
  za.BrowseContests = BrowseContests;
}(jQuery));
    