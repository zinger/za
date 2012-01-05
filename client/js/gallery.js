'use strict';
  
(function($){
  var Gallery = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    
    var attrs = za.entryattrs;
    
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

    $parentdiv.append(za.buildAnythingSliderGallery("thumbnail1", za.galleryTypes['hthumb'], thumbnailEntries));
    $("#thumbnail1").anythingSlider({
      showMultiple: 10, buildNavigation: false, buildStartStop: false, changeBy: 10, infiniteSlides: false,//,vertical: true,
                      onInitialized: function(e, slider) { za.removeSrcOnSliderInit(slider); },
                onSlideInit: function(e, slider) { za.addSrcOnSlideInit(slider); },
	        onSlideComplete: function(slider) { za.removeSrcOnSlideComplete(slider); }
    });
    $("#thumbnail1").parent().parent().addClass("horThumb");	// Added horThumb class to relevant properties
	
    $("#thumbnail1 .gallery-div").click(function() {
      var idx = $(this).children('img.main-img').first().attr('id').substring(5);
      idx = parseInt(idx) + 1;
      alert("now i have to show something");
      return false;
    });
    
    var $personInfo = $('<div class="person-info"></div>');
    
    $personInfo.append($('<img src="" alt="profile pic" style="width:40px; height:40px;"/>'));
    $personInfo.append($('<span style="color: #000000; font-size: 0.8em;padding-left: 4px;">Lucky Walker</span>'));
    
    $personInfo.append($('<img src="" alt="level" style="width:80px; height:20px;" />'));
    $personInfo.append($('<span style="color: #000000; font-size: 0.8em;padding-left: 4px;">Level 1</span>'));
   
    $personInfo.append($('<img src="" alt="points" style="width:20px; height:20px;" />'));
    $personInfo.append($('<span style="color: #000000; font-size: 0.8em;padding-left: 4px;">200</span>'));

    $personInfo.append($('<img src="" alt="gifts" style="width:20px; height:20px;" />'));
    $personInfo.append($('<span style="color: #000000; font-size: 0.8em;padding-left: 4px;">20</span>'));
    
    $personInfo.append($('<img src="" alt="boos" style="width:20px; height:20px;" />'));
    $personInfo.append($('<span style="color: #000000; font-size: 0.8em;padding-left: 4px;">10</span>'));
    
    $parentdiv.append($personInfo);
    
    var categories = [];
    categories.push({text: 'Hosted In'});
    categories.push({text: 'Participated In'});
    categories.push({text: 'Interested In'});

    for (var i=0; i<3; i++) {
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
      //$("#gallery1 .gallery-div").click(function() {
	var entryid = $(this).find('.entry-id').first().val();
	var contestid = $(this).find('.contest-id').first().val();
	$parentdiv.empty();
	za.PictureContestDetail({parentid: parentid, contestid: contestid, entryid: entryid});
      });
    };
  };
  za.Gallery = Gallery;
}(jQuery));