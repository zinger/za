<?php

echo "<p>I AM THE BEST</p>";
require_once('logger.php');
require_once('serverfunctions.php');
require_once('ContestService.php');

$op = $_REQUEST['op'];
$logger->info("op = $op");

switch($op) {
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

