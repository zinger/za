<?php

require_once('dbconstants.php');
require_once('constants.php');

class DbUtil {

  static function getDbConnection() {
    $dbc = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
      or die("Error connecting to database server ");
    mysql_select_db(DB_NAME, $dbc)
      or die("Error using database : ". DB_NAME . ' ' . mysql_error());
    return $dbc;
  }

  static function getCurrDate() {
    return date('Y-m-d H:i:s');
  }

  static function getDate($timestamp) {
    return date('Y-m-d H:i:s', $timestamp);
  }
  
  function getMySQLDateString($inputstring) //typical date : 04/21/2009
  {
    $mysqlDateString = date('Y-m-d H:i:s', strtotime($inputstring));
    return $mysqlDateString;
  }

}

?>
