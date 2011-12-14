<?php

require_once('logger.php');
require_once('common/DbUtil.php');
require_once('User.php');

class UserService {

  private $instance;
  private function __construct() {}

  public function instance() {
    if (!$instance instanceof UserService) {
      $instance = new UserService();
    }
    return $instance;
  }

  public function createUser($fbUser) { 
    $dbc = DbUtil::getDbConnection();
    $id = $fbUser['id'];
    $name = $fbUser['name'];
    $first_name = $fbUser['first_name'];
    $last_name = $fbUser['last_name'];
    $gender = $fbUser['gender'];
    $email = $fbUser['email'];

    $sql = "INSERT IGNORE INTO za_user (id, fb_uid, name, first_name, last_name, gender,  email, date_created) VALUES "; 
    $sql .= "('', '$id', '$name', '$first_name', '$last_name', '$gender', ";
    $sql .= "'$email', now())"; 

    $result = $this->queryDB($sql, $dbc, "createUser");
    return $result;
  }

  /** @returns User object populted with data. If input json is empty, empty User is returned */
  public function populateUser($jsonStr) {
    $user = new User();

    if (!empty($jsonStr)) {
      $user->populate($jsonStr);
    } 
    return $user;
  }

  private function queryDB($sql, $dbc, $msg) {
    global $logger;
    $conn = (!empty($dbc) === TRUE) ? $dbc : DbUtil::getDbConnection();

    $logger->debug($sql);
    $rslt = mysql_query($sql, $conn);
    if ($rslt === FALSE) {
      $logger->error($msg . " : " . mysql_error());
    }
    $result['result'] = $this->asArray($rslt);
    return $result;
  }

  private function asArray($rslt) {
    $results = array();
    // Indexed rows
    //while($row = mysql_fetch_row($rslt)) {
    if (is_bool($rslt)) {
      $results[] = $rslt;
    } else { 
      while($row = mysql_fetch_assoc($rslt)) {
        $results[] = $row;
      } 
    }
    return $results;
  }
}
?>
