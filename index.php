<?php
mysql_connect('localhost', 'root', '') or die(mysql_error());
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
	//echo "<pre>";print_r($_POST);
	//print_r($_FILES); echo "<pre>"; die;
	
	$fbobj = new FBHelper();
	//echo "ran::".$_FILES['files']['tmp_name'][0]."<br/>";
	$pic = $fbobj->uploadPhoto($_FILES['files']['tmp_name'][0], $_POST['title']);

	/*echo "hey:::: ";
	print_r($pic); die;*/
}
/*
$picfb = new FBHelper();
$upic = $picfb->getPictureById(null, '225900327485136');
*/

$comfb = new FBHelper();
$comfb->getComments();

//$upic = $picfb->getPictureById(null, '100001955114352');
/*
echo "<pre>";
print_r($upic);
echo "</pre>";
die;*/
echo "<script type='text/javascript'>window.location.href='$url'</script>";

?>
