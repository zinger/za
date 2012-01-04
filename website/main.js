'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  var ShowPage = function(args) {
    var baseWidth=128; //resolution width divided by 8 .... 128
    var baseHeight=96; // res height by 8 .... 96
    
    var margin;
    var contentWidth;
    var marginV;
    if ($(window).width() > 1200) {
      baseWidth=128;
      baseHeight=96;
      contentWidth = 1024;
      margin = ($(window).width() - 1024 )/ 2;
      if ($(window).height() > 768) { marginV = ($(window).height() - 768 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 768, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    } else if ($(window).width() > 1040) {
      baseWidth = 104;
      baseHeight = 78;
      contentWidth = 832;
      margin = ($(window).width() - 832 )/ 2;
      if ($(window).height() > 624) { marginV = ($(window).height() - 624 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 624, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    } else {
      baseWidth = 80;
      baseHeight = 60;
      contentWidth = 640;
      if ($(window).width() > 640) margin = ($(window).width() - 640 )/ 2;
      else margin = 0;
      if ($(window).height() > 480) { marginV = ($(window).height() - 480 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 480, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    }
    $("#content").append('<input id="isFlipped" type="hidden" value="0"></input>');
    /*
    if (screen.width >= 1200) {
      baseWidth=128;
      baseHeight=96;
      $('#content').css({height: 960, width: 1280, marginLeft:128, marginTop: 96, marginBottom: 96, marginRight: 128});
    } else {
      baseWidth=100;
      baseHeight=75;
      $('#content').css({height: 780, width: 1280, paddingLeft:128, paddingRight: 128});

    }*/
    
    var width=baseWidth;
    var height=baseHeight;
    var top=0;
    var left=0;
    var color;
    var images = [];
             images.push({src: 'images/trio-2-by-3.png'}); //2 by 3
     
     
      images.push({src: 'images/vintage-sing-2-by-2.png'}); // 2 by 2
      images.push({src: 'images/young-artists-4-by-2.png'}); // 4 by 2
            images.push({src: 'images/beautiful-black-4-by-1.png'}); // 4 by 1



           images.push({src: 'images/Bigstock_10656812-2-by-2.png'}); // 4 by 1

          //  images.push({src: 'images/mother-and-son-photograph-2-by-2.png'}); // 4 by 1
      images.push({src: 'images/pair-of-dancers-2-by-5.png'}); // 4 by 1

       images.push({src: 'images/juggling-blind-2-by-3.png'}); // 2 by 3
       images.push({src: 'images/photographer-2-by-3.png'}); // 2 by 2

            images.push({src: 'images/indian-girls-smiling-2-by-2.png'});
                  images.push({src: 'images/canine-education-4-by-1.png'}); // 4 by 1


       //     images.push({src: 'images/indian-girls-2-by-2.png'});
                        images.push({src: 'images/titlegrad1.png'}); // 4 by 1

    for (var i=0; i<11; i++) {
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
        case 10:
          width=baseWidth*4;
          height=baseHeight*2;
          top=baseHeight*3;
          left=baseWidth*2;
          color='#0000ff';
        default:
          break;
      }
      $div.css({backgroundColor:color, top: top, left:left, width:width, height:height});
      var $img = $('<img src="'+images[i].src+'" />');
      $img.css({top: top, left:left, width:width, height:height});
      $div.append($img);
      $("#content").append($div);
    };
    var $content = $('<div id="info-and-like"></div>');
    var $displayText = $('<span>Music, Dance, Sports, Art, Fashion, Craft, Food, Humor, Kindness, Love, Clumsiness! Whatever your zing may be... showcase it, get discovered, compete, and have fun!</span>');
    $content.append($displayText);
    $content.append($('<span>We\'re launching soon as a Facebook app! Like our page to receive updates and launch specials.'));
        //var $img = $('<img src="images/title_flipped.png" />');
        //$img.css({top: $(this).attr('top'), left:$(this).attr('left'), width:$(this).attr('width'), height:$(this).attr('height')});
    $content.append('<fb:like-box href="http://www.facebook.com/pages/WhatsYourZing/286055948109208" width="292" show_faces="false" stream="false" header="false"></fb:like-box>');
    $content.append('<fb:send href="http://www.whatsyourzing.com/za/website" font="verdana" height="60" width="120"></fb:send>');
    $("#div10").append($content);
    $("#info-and-like").hide();
    $("#content").bind('click', function() {
      if ($("#isFlipped").val() === '0') {
        $("#isFlipped").attr('value', '1');
        $("#div10").flip({
          direction:'rl',
          color: '#ccccff'
        });
        $("#div10").find('img').hide();
        $("#info-and-like").show();
        FB.XFBML.parse(document.getElementById('info-and-like'));
      } else { $("#isFlipped").attr('val', '0');$("#div10").revertFlip();
        $("#info-and-like").hide();$("#div10").find('img').show();
         }
    });
  };
  za.ShowPage = ShowPage;
}(jQuery));