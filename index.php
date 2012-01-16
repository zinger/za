<?php
mysql_connect('localhost', 'root', 'root') or die(mysql_error());
mysql_select_db('za') or die(mysql_error());

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

if(isset($_POST['upload_pic']))
{
	//echo "<pre>";print_r($_POST);die;
	//print_r($_FILES); echo "<pre>"; die;
	
	$fbobj = new FBHelper();
	if(isset($_POST['publish_to_fb']))
	{
		$pic = $fbobj->uploadPhoto($_FILES['files']['tmp_name'][0], $_POST['title']);
	}
	$result = $fbobj->uploadPhotoToDir($_FILES['files']);
	
}

if(isset($_GET['contest']) AND @$_GET['contest']!='')
{
	$inviteFor = base64_decode($_GET['contest']);
	$fbobj = new FBHelper();
	$invite_contest = $fbobj->setInvite($inviteFor);
	if($invite_contest=='already registered')
		echo '<script>alert("Your are already registered for this contest");</script>';
	else if($invite_contest=='contest not found')
		echo '<script>alert("Contest not found");</script>';
}
/*
$picfb = new FBHelper();
$upic = $picfb->getPictureById(null, '225900327485136');
*/

$comfb = new FBHelper();
//$comfb->getComments();

//$upic = $picfb->getPictureById(null, '100001955114352');
/*
echo "<pre>";
print_r($upic);
echo "</pre>";
die;*/
echo "<script type='text/javascript'>window.location.href='$url'</script>";

?>