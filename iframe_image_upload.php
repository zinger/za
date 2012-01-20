<?php
//echo "yup coming here";
mysql_connect('localhost', 'root', 'root') or die(mysql_error());
mysql_select_db('za') or die(mysql_error());

require_once('backend/logger.php');
require_once('backend/facebook.php');
require_once('backend/fbhelper.php');
require_once('backend/common/Config.php');
require_once('backend/common/constants.php');

$response = 'none';
$photo_fbid = '';
$fbobj = new FBHelper();
//$ufrnd = $fbobj->getFriends();

if($_FILES['files']['size']>0)
{
	$type = @exif_imagetype($_FILES['files']['tmp_name']);
	if (($type >= 1) && ($type <= 3))
	{
		$entry_arr['title'] = $_POST['title'];
		$entry_arr['description'] = $_POST['text'];
		$entry_arr['publish_to_facebook'] = $_POST['publish_to_fb'];
		
		$response = $fbobj->photoEntry($entry_arr, $_FILES['files']);
	}
	else
	{
		$response = "Invalid image. Please use JPG, GIF or PNG image type";
	}
}
else
{
	$response = "Image not found";
}
echo $response;
?>