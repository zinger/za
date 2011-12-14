<?php

require_once('backend/logger.php');
require_once('backend/facebook.php');
require_once('backend/fbhelper.php');
require_once('backend/common/Config.php');
require_once('backend/common/constants.php');

global $logger;

$fb = FBHelper::getFacebook();
$user = $fb->getUser();

$sr = $fb->getSignedRequest();

//var_dump($sr);
//var_dump($_RESPONSE);
if ($user) {
    $url = 'client/html/index.html';
} 

if (!$user) {
  $url = FBHelper::getFBLoginUrl(); 
} 

echo "<script type='text/javascript'>window.location.href='$url'</script>";

?>
