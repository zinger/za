<?php

require_once('logger.php');
require_once('serverfunctions.php');

$op = $_REQUEST['op'];

$logger->info("op = $op");

switch($op) {
  case "create_contest":
    $result = createContest($_REQUEST);
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

