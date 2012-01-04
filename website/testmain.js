'use strict';
  
(function($){
  var za;
  if (typeof(za) === 'undefined') {window.za = za = {};}
  var ShowPage = function(args) {
        $("#content").append('<fb:like-box href="http://www.facebook.com/pages/Test123/207742675960418" width="292" show_faces="false" stream="false" header="false"></fb:like-box>');
        //$content.append($('<div class="fb-send" data-href="http://www.facebook.com/pages/Test123/207742675960418" data-font="verdana" style="position: absolute; top: 90px; z-index:999999999999;"></div>'));
        $("#content").append('<fb:send href="http://www.facebook.com/pages/Test123/207742675960418" font="verdana" height="60" width="120"></fb:send>');
        
        FB.XFBML.parse(document.getElementById('div10'));
  };
  za.ShowPage = ShowPage;
}(jQuery));