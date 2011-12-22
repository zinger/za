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

if ($user) {
    $logger->info("index.php:found User!");
    $url = 'client/html/index.html';
} 

if (!$user) {
  $logger->info("index.php: no User found. Redirect to login url");
  $url = FBHelper::getFBLoginUrl(); 
} 

$logger->info("index.php: url: " . $url);
echo "<script type='text/javascript'>window.location.href='$url'</script>";

?>
