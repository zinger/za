<?php

require_once('logger.php');
require_once('fbutil.php');
require_once('common/constants.php');
require_once('facebook.php');
require_once('UserService.php');

global $logger;

$fb = new Facebook(array('appId' => FB_APP_ID, 'secret' => FB_SECRET));
$user = $fb->getUser();

//var_dump($fb);
//var_dump($_REQUEST);

// persist user - TODO: only if new?
UserService::instance()->createUser($user);
$token = $fb->getAccessToken();
populateAccessToken($token);

//graph API




?>
