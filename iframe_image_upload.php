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
$ufrnd = $fbobj->getFriends();

if($_FILES['files']['size']>0)
{
	$type = @exif_imagetype($_FILES['files']['tmp_name']);
	if (($type >= 1) && ($type <= 3))
	{
		if(isset($_POST['publish_to_fb']))
		{
			$fbobj2 = new FBHelper();
			$photo_fbid = $fbobj2->uploadPhoto($_FILES['files']['tmp_name'], $_POST['title']);
			$response = 'uploaded pic to fb';
		}
		
		$fbobj3 = new FBHelper();
		$result = $fbobj3->uploadPhotoToDir($_FILES['files']);
		$response = 'uploaded photo to Dir';
		
		if($result!='false')
		{
			$entry_arr['title'] = $_POST['title'];
			$entry_arr['description'] = $_POST['text'];
			$entry_arr['photo'] = $result;
			$entry_arr['publish_to_facebook'] = $_POST['publish_to_fb'];
			$entry_arr['photo_fbid'] = $photo_fbid;
			
			$fbobj4 = new FBHelper();
			$result = $fbobj4->saveToPhotoEntry($entry_arr);
			if($result=='true')
				$response = "Entry submitted successfully";	
			else
				$response = "Error Occured. Please try again";
		}
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
//echo "hello | ".$_POST['text-entry']." | ".$_POST['entry-title'];
?>