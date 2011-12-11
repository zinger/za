'use strict';
  
(function($){
  var Home = function(args) {
    var parentid = args.parentid;
    var $parentdiv = $( za.jq(parentid) );
    $parentdiv.append($('<p>HaHa Home</p>'));
    // TODO get logged in user id
    var user = za.getUser();
    
    // TODO make a request to server to get highlighted contest info + list of contests to display as featured ones.
    var contestid = '1';
    var entryid = '1';
    za.PictureContestDetail({parentid: parentid, contestid: contestid, entryid: entryid});
    
    var featuredContests = [];
  
    featuredContests.push({eid: '1', url: '../../samplecontent/images/1.jpg', thumb: '../../samplecontent/images/thumbnails/1.jpg', title: 'Title1', fbpid: 'User1', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest' });
    featuredContests.push({eid: '2', url: '../../samplecontent/images/2.jpg', thumb: '../../samplecontent/images/thumbnails/2.jpg', title: 'Title1', fbpid: 'User2', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '2', ctitle: 'Zing of The Month'   });
    featuredContests.push({eid: '3', url: '../../samplecontent/images/3.jpg', thumb: '../../samplecontent/images/thumbnails/3.jpg', title: 'Title1', fbpid: 'User3', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '1', ctitle: 'Wierd Hairdo Contest'   });
    featuredContests.push({eid: '4', url: '../../samplecontent/images/4.jpg', thumb: '../../samplecontent/images/thumbnails/4.jpg', title: 'Title1', fbpid: 'User4', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '3', ctitle: 'Monuments'   });
    featuredContests.push({eid: '5', url: '../../samplecontent/images/5.jpg', thumb: '../../samplecontent/images/thumbnails/5.jpg', title: 'Title1', fbpid: 'User5', fbpname: 'Lucky Walker', fbpurl: '../../samplecontent/images/thumbnails/1.jpg', numparts: 55, cid: '4', ctitle: 'Historic Moments'   });
    var $featuredContests = $('<div class="featured-contests"></div>');
    
    $.each (featuredContests, function(i, entry) {
      $featuredContests.append('<div class="featured-contest" ><img src="'+entry.url+'" width="150" height="75"></img></div>');
    });
    $parentdiv.append($featuredContests);
    
  };
  za.Home = Home;
}(jQuery));
