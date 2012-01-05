<!DOCTYPE html> 
  <!--PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">-->
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
<!--<html>-->
<head>
  <title>Comments</title>
</head>
<body>
	<div id="fb-root"></div>
	<script type="text/javascript" src="http://connect.facebook.net/en_US/all.js"></script>
    <script type="text/javascript">
    FB.init({appId:'318117531546857',status:true,cookie:true,xfbml:true});
    </script>
    
    <fb:serverFbml width="758px">
    <script type="text/fbml">
    <fb:fbml>
    <fb:request-form
    action="http://apps.facebook.com/zingerdev/"
	target="_top"
    method="POST"
    type="Zingerdev"
    content="I would like you to check this application &lt;fb:req-choice url=&quot;http://apps.facebook.com/zingerdev/index.php?contest=<?=base64_encode($_GET['c'])?>&quot; label=&quot;Let me check my friends&quot; /&gt;"
    >
    <fb:multi-friend-selector showborder="false" actiontext="Invite your firend to Zingerdev" />
    </fb:request-form>
    </fb:fbml>
    </script>
    </fb:serverFbml>
    
</body>
</html>
