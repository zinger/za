<?php
echo "yup coming here";
mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_select_db('za') or die(mysql_error());

require_once('../../backend/logger.php');
require_once('../../backend/facebook.php');
require_once('../../backend/fbhelper.php');
require_once('../../backend/common/Config.php');
require_once('../../backend/common/constants.php');

$comfb = new FBHelper();
$comfb->getComments();
?>
<!DOCTYPE html> 
  <!--PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">-->
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
<!--<html>-->
<head>
  <title>Comments</title>
</head>
<body>
  <div id="fb-root"></div>
	 

  <!--<script type="text/javascript">
    window.fbAsyncInit = function() {
      FB.init({
        //appId      : '188092504602584', // App ID
        //appId      : '318117531546857', // App ID
        appId      : za.getAppId(), // App ID
       // channelUrl : '//www.whatsyourzing.com/sangeeta/za/client/html/channel.html', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        oauth      : true, // enable OAuth 2.0
        xfbml      : true  // parse XFBML
      });
      FB.getLoginStatus(function(response) {
        if (response.authResponse) {
          //alert('user ' + response.authResponse.userID + ' accessToken ' + response.authResponse.accessToken);
          //TODO : Logged in. Now what?
        } else {
          window.location.href='http://www.facebook.com/dialog/oauth?client_id=za.getAppId()&redirect_uri=za.getRedirectUri()&scope=za.getFbScope()';
       }
      });
      FB.Event.subscribe('edge.create', function(response) { alert('Yeah! Liked ' + response); });
    };

    // Load the SDK Asynchronously
    (function(d){
      var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
      js = d.createElement('script'); js.id = id; js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";
      d.getElementsByTagName('head')[0].appendChild(js);
    }(document));
    /*
      function sendRequestToRecipients() {
        var user_ids = document.getElementsByName("user_ids")[0].value;
        FB.ui({method: 'apprequests',
          message: 'My Great Request',
          to: user_ids,
        }, requestCallback);
      };
    */
     
  </script>-->
  
  <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=318117531546857";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
  </script>
  
<!--<div class="fb-comments" data-href="http://www.facebook.com/photo.php?fbid=225872857487883&amp;set=a.225872854154550.56156.100001955114352" data-num-posts="2" data-width="500"></div>-->
<div class="fb-comments" data-href="http://sabdekho.com/projects/zatest/comment.php" data-num-posts="2" data-width="500"></div>

</body>
</html>