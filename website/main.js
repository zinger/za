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
      margin = ($(window).width() - 1024 )/ 2 -2 -10;
      if ($(window).height() > 768) { marginV = ($(window).height() - 768 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 768, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    } else if ($(window).width() > 1040) {
      baseWidth = 104;
      baseHeight = 78;
      contentWidth = 832;
      margin = ($(window).width() - 832 )/ 2 -2 -10;
      if ($(window).height() > 624) { marginV = ($(window).height() - 624 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 624, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    } else {
      baseWidth = 80;
      baseHeight = 60;
      contentWidth = 640;
      if ($(window).width() > 640) margin = ($(window).width() - 640 )/ 2 -2 -10;
      else margin = 0;
      if ($(window).height() > 480) { marginV = ($(window).height() - 480 )/ 2;}
      else marginV = 0;
      $('#content').css({height: 480, width: contentWidth, marginLeft:margin, marginTop: marginV, marginBottom: marginV, marginRight: margin});
    }
    $("#content").append('<input id="isFlipped" type="hidden" value="0"></input>');
    
    var width=baseWidth;
    var height=baseHeight;
    var top=0;
    var left=0;
    var color;
    var images = [];
                      //images.push({src: 'images/stock-photo-11769318-chef-completing-cake.png'});

                      images.push({src: 'images/iStock_000017929712Small-cake-2-by-3.png'});

        //     images.push({src: 'images/trio-2-by-3.png'}); //2 by 3
      images.push({src: 'images/iStock_000016550997XSmall-singer-2-by-2.png'}); // 2 by 2
                              images.push({src: 'images/iStock_000016009576Small-painting-4-by-2.png'});

     // images.push({src: 'images/bm_angry_birds.png'}); // 4 by 2
                             images.push({src: 'images/iStock_000004363077Small-man-dog-4-by-1.png'}); // 4 by 1
//images.push({src: 'images/stock-photo-18990574-geek-man-giving-his-girlfriend-a-valentine-present.png'});
images.push({src: 'images/iStock_000015402653XSmall-valentine-2-by-2.png'});

//           images.push({src: 'images/Bigstock_10656812-2-by-2.png'}); 
      images.push({src: 'images/iStock_000016550935Small-dancers-2-by-5.png'});
           images.push({src: 'images/iStock_000008765918Small-juggler.png'}); // 2 by 3

       images.push({src: 'images/iStock_000005353776Small-photographer-2-by-3.png'}); // 2 by 2
                   images.push({src: 'images/iStock_000015695089XSmall-swimmer-2-by-2.png'});

         //   images.push({src: 'images/stock-photo-17403228-trapeze-artist.png'});
    //                    images.push({src: 'images/stock-photo-16009576-closeup-of-man-painting-green-picture-with-circle-pattern.png'});

                             images.push({src: 'images/iStock_000016164599XSmall-black-woman.png'}); // 4 by 1

              //          images.push({src: 'images/title-red-zing.png'}); // 4 by 1
                            images.push({src: 'images/title_red_finalv2.png'}); // 4 by 1


    for (var i=0; i<11; i++) {
      var id = 'div' + i;
      var $div = $('<div id="'+id+'" class="imgDiv"></div>');
      switch (i) {
        case 0:
          width=baseWidth*2;
          height=baseHeight*3;
          top = 0;
          left=0;
          break;
        case 1:
          width=baseWidth*2;
          height=baseHeight*2;
          left=baseWidth*2;
          top = 0;
          break;
        case 2:
          width=baseWidth*4;
          height=baseHeight*2;
          left=baseWidth*4;
          top = 0;
          break;
        case 3:
          width=baseWidth*4;
          height=baseHeight*1;
          left=baseWidth*2;
          top=baseHeight*2;
          break;
        case 4:
          width=baseWidth*2;
          height=baseHeight*2;
          left=baseWidth*6;
          top=baseHeight*2;
          break;
        case 5:
          width=baseWidth*2;
          height=baseHeight*5;
          left=0;
          top=baseHeight*3;
          break;
        case 6:
          width=baseWidth*2;
          height=baseHeight*3;
          top=baseHeight*4;
          left=baseWidth*6;
          break;
        case 7:
          width=baseWidth*2;
          height=baseHeight*3;
          top=baseHeight*5;
          left=baseWidth*2;
          break;
        case 8:
          width=baseWidth*2;
          height=baseHeight*2;
          top=baseHeight*5;
          left=baseWidth*4;
          break;
        case 9:
          width=baseWidth*4;
          height=baseHeight*1;
          top=baseHeight*7;
          left=baseWidth*4;
          break;
        case 10:
          width=baseWidth*4;
          height=baseHeight*2;
          top=baseHeight*3;
          left=baseWidth*2;
        default:
          break;
      }
      $div.css({top: top, left:left, width:width, height:height});
      var $img = $('<img src="'+images[i].src+'" />');
      $img.css({top: top, left:left, width:width, height:height});
      $div.append($img);
      $div.mouseover(function() {
        if ($(this).attr('id') === 'div10' && $("#isFlipped").val() === '0') {
          $( this ).css( "left","-=10" );
          $( this ).css( "top","-=10" );
        }
        else if ($(this).attr('id') !== 'div10') {
          $( this ).css( "left","-=10" );
          $( this ).css( "top","-=10" );
        }
        $(this).addClass('highlight-div');
      });
      $div.mouseout(function() {
        $(this).removeClass('highlight-div');
        if ($(this).attr('id') === 'div10' && $("#isFlipped").val() === '0') {
          $( this ).css( "left","+=10" );
          $( this ).css( "top","+=10" );
        }
        else if ($(this).attr('id') !== 'div10') {
          $( this ).css( "left","+=10" );
          $( this ).css( "top","+=10" );
        }
      });
      $("#content").append($div);
    };
    $("#content").bind('click', function() {
      $("#div10").flip({
          direction:'rl',
         // color: '#ffffff',/*'#ff0000', /*'#ccccff',*/
          onEnd: function() {
            changeFilpContent();
          }
      });
    });
    var changeFilpContent = function() {
      $("#div10").empty();
      if ($("#isFlipped").val() === '0') {
        $("#isFlipped").attr('value', '1');
        addFlipContent();
      } else {
        $("#isFlipped").attr('value', '0');
        removeFlipContent();
      }/*
      $("#div10").mouseover(function() {
          $("#div10").addClass('highlight-div');
        });
        $("#div10").mouseout(function() {
          $("#div10").removeClass('highlight-div');
        });*/
    };
    var addFlipContent = function() {
        var $content = $('<div id="info-and-like"></div>');
        var $displayText = $('<div id="info-text">Music, Dance, Sports, Art, Fashion, Food, Humor, Love, Clumsiness... whatever your zing may be, showcase it, get discovered, compete, and have fun!</div>');
        $content.append($displayText);
        $content.append($('<div id="info-launch">We\'re launching soon as a Facebook app! Like us to receive updates and launch specials.</div>'));
        $content.append('<div id="za-like-box" style="display: inline; width: 292px;"><fb:like-box href="http://www.facebook.com/pages/WhatsYourZing/286055948109208" send="true" width="292" show_faces="false" stream="false" header="false"></fb:like-box></div>');
        $content.append('<div id="za-send" style="display: inline; width: 90px;"><fb:send href="http://www.whatsyourzing.com/za/website" font="verdana" ></fb:send></div>');
        $("#div10").append($content);
        var width=baseWidth*6;
        var height=baseHeight*4;
        var top=baseHeight*2;
        var left=baseWidth*1 - 14;
        var color= '#cccccc'; //'#ffddaa'; //'#ffffff';//'#ffffcc'; //'#ffffff';   // '#ccccff';
        FB.XFBML.parse(document.getElementById('info-and-like'));
        $("#div10").css({backgroundColor:color, top: top, left:left, width:width, height:height, border:'outset', borderColor:'#dd0000', borderWidth:'14px'});
        if (baseWidth === 128) {
          $("#info-text").addClass('info-text-large');
          $("#info-launch").addClass('info-launch-large');
          $("#za-like-box").addClass('za-like-large');
          $("#za-send").addClass('za-send-large');
        } else if (baseWidth === 104) {
          $("#info-text").addClass('info-text-medium');
          $("#info-launch").addClass('info-launch-medium');
          $("#za-like-box").addClass('za-like-medium');
          $("#za-send").addClass('za-send-medium');
        } else {
          $("#info-text").addClass('info-text-small');
          $("#info-launch").addClass('info-launch-small');
          $("#za-like-box").addClass('za-like-small');
          $("#za-send").addClass('za-send-small');
        }
    }
    var removeFlipContent = function() {
        var $img = $('<img src="'+images[10].src+'" />');
        var width=baseWidth*4;
        var height=baseHeight*2;
        var top=baseHeight*3;
        var left=baseWidth*2;
        var color='#ccccff';
        $img.css({top: top, left:left, width:width, height:height});
        $img.mouseover(function() {
          $img.addClass('highlight-div');
        });
        $img.mouseout(function() {
          $img.removeClass('highlight-div');
        });
        $("#div10").append($img);
        $("#div10").css({backgroundColor:color, top: top, left:left, width:width, height:height, border:'none'});
    }
  };
  za.ShowPage = ShowPage;
}(jQuery));