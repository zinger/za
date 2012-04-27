'use strict';
  
(function($){
  var PictureContestDetail = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid));
    var entryid = args.entryid;
    var contestid = args.contestid;
    var invokedBy = args.invokedBy;
    var contestTitle = args.contestTitle;
    // TODO: We need to set the active page of the slider using the entry id
    
  /****** start of contest title display ******/
   var $contestTitleDiv = $('<div></div>');
   var $contestTitle = $('<span class="contest-title">'+contestTitle+'</span>');
    $contestTitle.bind('click', function () {
      $parentdiv.empty();
      za.ViewContest({parentid: parentid, contestid: contestid});
    });
    $contestTitleDiv.append($contestTitle);
    $parentdiv.append($contestTitle);
    /****** end of contest title display ******/
    
    /****** start of Submit Entry Button display ******/
    /** only shown if the picture contest detail was invoked from the Contests Tab **/
    if (invokedBy !== 'home') {
      var $submitEntry = $('<button class="submit-entry-button" id="'+za.buttons['submitentry'].id+'"/>');
      $submitEntry.button({label: za.buttons['submitentry'].label});
      $submitEntry.bind('click', function() { 
	$parentdiv.empty();
	za.SubmitEntry({parentid: parentid, contestid: contestid, contestTitle: contestTitle});
      });
      $parentdiv.append($submitEntry);
    };
    
    /****** end of Submit Entry Button display *******/
    
    var $divinfo = $('<div class="entry-info" style="width:200px; height:50px; z-index: 99999;"></div>');
    $divinfo.append($('<img class="user-pic" src="" style="width:40px; height:40px; z-index: 99999;"/>'));
    // TODO: Hide the 2 input elements below and remove span... this is just for debugging
    $divinfo.append($('<span>entry id</span><input type="text" id="entry-id" style="z-index: 99999;" value="'+entryid+'"/>'));
    $divinfo.append($('<span>contest id</span><input type="text" id="contest-id" style="z-index: 99999;" value="'+contestid+'"/>'));

    $parentdiv.append($divinfo);
    //$divinfo.append($('<span style="color: #000000; z-index: 99999; font-size: 0.8em;padding-left: 4px;">'+entry[attrs.partname.id]+'</span>'));
    //$divinfo.append($('<input id="myvote" type="hidden" value="'+entry[attrs.myvote.id]+'" />'));
  
      /**** display voting elements *****/
    /*** this is appended to the parent div but shown / hidden on a per entry basis if user has voted or not *****/
    $parentdiv.append(za.buildRatingPanel({partName: 'Lucky'}));
    $("#rate-root").children('input').each(function(i, element){ // this needs to be done after rate-root has been appended to parent
      //alert("found rate button " + i);
      $(this).button();
    });
  /**** end of display voting elements *****/
    
    var data = 'op=get_entries&cid='+contestid;
    $.ajax({                                      
      url: za.getServerUri(),       
      data: data,                        
      dataType: 'json',                      
      success: function(data) { displayEntries(data['result']); }
    });
    
    var displayEntries = function(entries) {
      if (entries.length === 0) {
	$("#rate-root").hide();
	$parentdiv.append($('<div><span>There are no entries for this contest. Be the first one and get 50 bonus Zing Coins!</span></div>'));
      } else {
	var pictureEntries = [];
	var thumbnailEntries = [];
	var gotoslide = 0;
	$.each(entries, function(i, row) {
	    if (entryid !== undefined && row.entryid === entryid) gotoslide = i; 
	    pictureEntries.push({eid: row.id, url: row.small_url, thumb: row.small_url, title: row.name, fbpid: row.fb_pid, fbpname: row.fb_pname, cid: row.contest_id, name: row.name, etype: row.entry_type});
	    thumbnailEntries.push({id: row.id, url: row.small_url, thumb: row.small_url, fbpid: row.fb_pid, fbpname: row.fb_pname, fb_purl: row.small_url});
	  });
	    // Following code for wrap ver thumb in col1 and preview container & hor thumb in col2
	var $galleryContainer = $("<div class='galleryContainer'></div>");
	var $col1 = $("<div class='col1'></div>");
	var $col2 = $("<div class='col2'></div>");
	var $clr  = $('<div class="clr"></div>');
    
	$parentdiv.append($galleryContainer);
	$galleryContainer.append($col1).append($col2).append($clr);
    
    	// TODO move like button to show misc info... this needs to be displayed for each main entry
	var $likebtn = $('<div style="margin-top:25px;margin-left:50px;"></div>');
	$likebtn.append($('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D225872857487883%26amp%3Bset%3Da.225872854154550.56156.100001955114352&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=30&amp;appId=211738135569277" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:30px;" allowTransparency="true"></iframe>'));
	
	/**** temp comment
    // TODO move comment button to show misc info... this needs to be displayed for each main entry
	var $comment = $('<div style="margin-top:5px;margin-left:50px;"></div>');
	
	//$comment.append($('<fb:comments href="http://www.facebook.com/photo.php?pid=515490&amp;id=100001955114352" num_posts="4" width="600"></fb:comments>'));
	//$comment.append($('<div class="fb-comments" data-href="http://www.facebook.com/photo.php?fbid=225872857487883&amp;set=a.225872854154550.56156.100001955114352" data-num-posts="2" data-width="500"></div>'));
	$comment.append($('<iframe src="comment.html" width="600" height="100%" frameborder=0><p>Your browser does not support IFrame.</p></iframe>'));
       end of temp comment *****/
	
	  buildMainGallery(pictureEntries, gotoslide);
	  buildHorizThumbGallery(thumbnailEntries);
	  buildVertThumbGallery(thumbnailEntries);
	  $col2.append($likebtn);
	//  $col2.append($comment);
      }
    };

/**** temp comment
    
******/



/*
    var handleFileSelect = function(evt) {
      $dialog.dialog('open');
            return false;
    };
*/
    
    var showMiscInfo = function(slider, invokedByInit) {
      //alert("coming in show misc info");
      if (invokedByInit) var $base = slider.$el.find('.panel').eq(slider.options.startPanel);
      else var $base = slider.$targetPage;
      var entryid;
      // TODO there is something wierd going on regarding setting of entry id for the slide if there is one and only 1 submission
      $base.find('.entry-id').each(function() { entryid = $(this).val(); 
				   $("#entry-id").attr('value',entryid);});
      var data = 'op=get_vote_and_stats&fbpid='+za.userFbId+'&eid='+$("#entry-id").val();
      $.ajax({                                      
	url: za.getServerUri(),       
	data: data,                        
	dataType: 'json',                      
	success: function(data) {
	  //alert("after getting my vote " + JSON.stringify(data));
	  var myvote = -1;
	  var voteCount = 0;
	  var score = 0;
	  var rank = -1;
	  var trend = 1;
	  //alert("data is " + JSON.stringify(data));
	  var myvoterows = data['myvote']; var rows = myvoterows['result'];
	  if (rows.length > 0) {
	    $.each(rows, function(i, row) {
	      myvote = row.vote;
	      /*
	      if (i === 1) {
		voteCount = row.num_votes;
		score = row.vote_average;
		//rank = row.rank;
		//trend = row.trend;
	      }*/
	      });
	  };
	  var statrows = data['stats'];
	  rows = statrows['result'];
	  if (rows.length > 0) {
	    $.each(rows, function(i, row) {
	        voteCount = row.num_votes;
		score = row.vote_average;
		//rank = row.rank;
		//trend = row.trend;
	      });
	  };
	  if (myvote === -1 || myvote === undefined) $("#rate-root").show(); else $("#rate-root").hide();
	  za.showRatingInfo('gallery1', voteCount, score, rank, trend);
	  }
      });
      if ($(".send-gift")) $(".send-gift").remove();
      $("#gallery1").parent().append($('<div class="send-gift">Send a gift</div>'));
      $(".send-gift").effect("bounce", { times:3, direction: 'left'}, 1000);
      var userFbId;
      $base.find('.fbuser-id').each(function(){ userFbId = $(this).val(); });
      $(".user-pic").attr('src', 'https://graph.facebook.com/'+userFbId+'/picture');
      FB.api('/'+userFbId, function(response) {
        userName = response.name;
	if ($(".user-name")) $(".user-name").remove();
	$(".entry-info").append($('<span class="user-name" style="color: #000000; z-index: 99999; font-size: 0.8em;padding-left: 4px;">'+userName+'</span>'));
      });
      //$divinfo.append($('<input id="myvote" type="hidden" value="'+entry[attrs.myvote.id]+'" />'));

      //$divinfo.append($('<img src="https://graph.facebook.com/'+entry[attrs.fbpartid.id]+'/picture" style="width:40px; height:40px; z-index: 99999;"/>'));

    };	
	
    var buildMainGallery = function(pictureEntries, gotoslide) {
    // Preview Gallery
      $('.col2').append(za.buildAnythingSliderGallery('gallery1', za.galleryTypes['entrydetail'], pictureEntries));
      $("#gallery1").anythingSlider({
	showMultiple: false, buildStartStop: false, buildArrows: true, buildNavigation: false,
	infiniteSlides: false, startPanel: gotoslide,
	onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); showMiscInfo(slider, true); },
	onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); showMiscInfo(slider, false); },
	onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider);}
      });

      $("#gallery1").parent().parent().addClass("infoHeight");	// Added infoHeight class to adjust information shown under preview image
    }

    var buildHorizThumbGallery = function(thumbnailEntries) {
      $('.col2').append(za.buildAnythingSliderGallery("thumbnail1", za.galleryTypes['hthumb'], thumbnailEntries));
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
      var $paginationContianer = $('<div class="paginationContianer"></div>');	// Created pagination container to right align pagination between preview and thumbnail images
      var $pagination = $('<div class="pagination"></div>');
      var $first = $('<a href="#" class="first" data-action="first">&laquo;</a>');
      var $previous = $('<a href="#" class="previous" data-action="previous">&lsaquo;</a>');
      var $pagetext = $('<input type="text" readonly="readonly" data-max-page="40" />');
      var $next = $('<a href="#" class="next" data-action="next">&rsaquo;</a>');
      var $last = $('<a href="#" class="last" data-action="last">&raquo;</a>');
      $clr = $('<div class="clr"></div>');	// Created to clear the float effect
      
      $pagination.append($first).append($previous).append($pagetext).append($next).append($last);
      $paginationContianer.append($pagination).append($clr);	// Wrapped pagination to pagination contianer
      $paginationContianer.append('<input type="hidden" id="thumbnail1page" value="1"></input>');
      $(".col2 .anythingSlider:eq(0)").after($paginationContianer); // Added pagination between preview and thumbnail images
    
      $('.pagination').jqPagination({
	paged: function(page) {
	// need to add logic if page is 1 or 40 then dont use goForward or go Back.
	alert("requested page is" + page );
	  if (parseInt(page) > parseInt($("#thumbnail1page").val())) 
	    $("#thumbnail1").data('AnythingSlider')['goForward']();
	  else
	    $("#thumbnail1").data('AnythingSlider')['goBack']();
	  $("#thumbnail1page").val(page);
	}
      });
    }
	
    var buildVertThumbGallery = function(thumbnailEntries) {
      $('.col1').append(za.buildAnythingSliderGallery("thumbnail2", za.galleryTypes['vthumb'], thumbnailEntries));
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
    };
  };
  za.PictureContestDetail = PictureContestDetail;
}(jQuery));