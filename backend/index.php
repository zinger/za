<?php
require_once('logger.php');
require_once('serverfunctions.php');
require_once('ContestService.php');
require_once('EntryService.php');


require_once('facebook.php');
require_once('fbhelper.php');
require_once('common/Config.php');
require_once('common/constants.php');

$op = $_REQUEST['op'];
$logger->info("op = $op");
$fbobj = new FBHelper();

$logger->info("Before switch statement");
switch($op) {
  case "submit_entry":
    //mysql_connect('localhost', 'root', 'root') or die(mysql_error());
    //mysql_select_db('za') or die(mysql_error());
    if($_FILES['files']['size']>0) {
	$type = @exif_imagetype($_FILES['files']['tmp_name']);
	if (($type >= 1) && ($type <= 3)) {
		$entry_arr['title'] = $_POST['title'];
		$entry_arr['description'] = $_POST['desc'];
		$entry_arr['publish_to_facebook'] = $_POST['publish_to_fb'];
		//$response = $fbobj->photoEntry($entry_arr, $_FILES['files']);
                $id = $fbobj->uploadPhoto($entry_arr, $_FILES['files']);
                if (isset($id)) {
                  $photo = $fbobj->getPictureById($id);
                  //$logger->info("index.php photo " . print_r($photo));

                  $result = EntryService::instance()->createEntry($photo);
                } else { $response = "Error Submitting Photo. Please try again"; }
	} else {
		$response = "Invalid image. Please use JPG, GIF or PNG image type";
	}
    } else {
	$response = "Image not found";
    }
    echo $response;
    break;
  case "submit_entry_old":
    mysql_connect('localhost', 'root', 'root') or die(mysql_error());
    mysql_select_db('za') or die(mysql_error());
    if($_FILES['files']['size']>0) {
	$type = @exif_imagetype($_FILES['files']['tmp_name']);
	if (($type >= 1) && ($type <= 3)) {
		$entry_arr['title'] = $_POST['title'];
		$entry_arr['description'] = $_POST['text'];
		$entry_arr['publish_to_facebook'] = $_POST['publish_to_fb'];
		$response = $fbobj->photoEntry($entry_arr, $_FILES['files']);
	} else {
		$response = "Invalid image. Please use JPG, GIF or PNG image type";
	}
    } else {
	$response = "Image not found";
    }
    echo $response;
    break;
  case "create_contest":
    $files = $_FILES['capFile'];
    echo $files;
    $result = ContestService::instance()->createContest();
    break;
  case "get_contests_by_creation_date":
    $sd = $_REQUEST['sd'];
    $ed = $_REQUEST['ed'];
    $limit = $_REQUEST['limit'];
    $result = ContestService::instance()->getContestsByCreationDate($sd, $ed, $limit);
    break;
  case "get_contests_by_deadline":
    $sd = $_REQUEST['sd'];
    $ed = $_REQUEST['ed'];
    $limit = $_REQUEST['limit'];
    $result = ContestService::instance()->getContestsBySubmissionEndDate($sd, $ed, $limit);
    break;
  case "get_contest_by_id":
    $id = $_REQUEST['id'];
    $result = ContestService::instance()->getContestById($id);
    break;
  case "get_contests_by_cause":
    $id = $_REQUEST['id'];
    $result = ContestService::instance()->getContestsByCause($id);
    break;
  case "get_contest_by_creator":
    $id = $_REQUEST['id'];
    $result = ContestService::instance()->getContestsByCreator($id);
    break;
  default:
    $logger->info("Invalid Operator");
    break;
}

$result['op'] = $op;
$response = json_encode($result);
$logger->info("op = $op, response = $response");

echo $response;

?>

