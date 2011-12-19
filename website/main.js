'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  var ShowPage = function(args) {
    var baseWidth=128; //resolution width divided by 8 .... 128
    var baseHeight=96; // res height by 8 .... 96
    var width=baseWidth;
    var height=baseHeight;
    var top=0;
    var left=0;
    var color;
    var images = [];
             images.push({src: 'images/avant-garde-2-by-3.png'}); //2 by 3
     
     
      images.push({src: 'images/vintage-sing-2-by-2.png'}); // 2 by 2
      images.push({src: 'images/young-artists-4-by-2.png'}); // 4 by 2
      images.push({src: 'images/canine-education-4-by-1.png'}); // 4 by 1

      
      images.push({src: 'images/naked-woman-2-by-2.png'}); // 4 by 1
          //  images.push({src: 'images/mother-and-son-photograph-2-by-2.png'}); // 4 by 1
      images.push({src: 'images/classical-dancer-2-by-5.png'}); // 4 by 1

//images.push({src: 'images/photographer-2-by-2.png'}); // 2 by 2
       images.push({src: 'images/juggling-blind-2-by-3.png'}); // 2 by 3
       images.push({src: 'images/photographer-2-by-3.png'}); // 2 by 2

 //images.push({src: 'images/ball-dance-2-by-3.png'}); // 2 by 3

     
       //     images.push({src: 'images/indian-girls-2-by-2.png'});
      images.push({src: 'images/turkey-2-by-2.png'});
            images.push({src: 'images/mountainbike-4-by-1.png'}); // 4 by 1
    for (var i=0; i<10; i++) {
      var id = 'div' + i;
      var $div = $('<div id="'+id+'" class="imgDiv"></div>');
      switch (i) {
        case 0:
          width=baseWidth*2;
          height=baseHeight*3;
          color ='green';
          top = 0;
          left=0;
          break;
        case 1:
          width=baseWidth*2;
          height=baseHeight*2;
          left=baseWidth*2;
          color ='blue';
          top = 0;
          break;
        case 2:
          width=baseWidth*4;
          height=baseHeight*2;
          left=baseWidth*4;
          color ='teal';
          top = 0;
          break;
        case 3:
          width=baseWidth*4;
          height=baseHeight*1;
          left=baseWidth*2;
          top=baseHeight*2;
          color = 'pink';
          break;
        case 4:
          width=baseWidth*2;
          height=baseHeight*2;
          left=baseWidth*6;
          top=baseHeight*2;
          color='maroon';
          break;
        case 5:
          width=baseWidth*2;
          height=baseHeight*5;
          left=0;
          top=baseHeight*3;
          color='aqua';
          break;
        case 6:
          width=baseWidth*2;
          height=baseHeight*3;
          top=baseHeight*4;
          left=baseWidth*6;
          color='yellow';
          break;
        case 7:
          width=baseWidth*2;
          height=baseHeight*3;
          top=baseHeight*5;
          left=baseWidth*2;
          color='red';
          break;
        case 8:
          width=baseWidth*2;
          height=baseHeight*2;
          top=baseHeight*5;
          left=baseWidth*4;
          color='orange';
          break;
        case 9:
          width=baseWidth*4;
          height=baseHeight*1;
          top=baseHeight*7;
          left=baseWidth*4;
          color='purple';
          break;
        default:
          break;
      }
      $div.css({backgroundColor:color, top: top, left:left, width:width, height:height});
      $div.append($('<img src="'+images[i].src+'" />'));
      $("#content").append($div);
    };
  };
  za.ShowPage = ShowPage;
}(jQuery));