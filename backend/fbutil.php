<?php

require_once('logger.php');
require_once('common/DbUtil.php');

function populateAccessToken($token) {
  global $logger;

  $dbc = DbUtil::getDbConnection();
//    $token = $user->getUserAccessToken();

  $sql = "INSERT INTO fb_access_token ('fb_uid', 'access_token', 'date_created') VALUES ";
  $sql .= "('$user->id' , '$token', now())";  
  $logger->info($sql);
  $rslt = mysql_query($sql, $dbc);
  return array($rslt);
}

?>
