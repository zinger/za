<?php

require_once('logger.php');
require_once('common/DbUtil.php');
require_once('Invite.php');

class InviteService {

  private $instance;
  private function __construct() {}

  public function instance() {
    if (!$instance instanceof InviteService) {
      $instance = new InviteService();
    }
    return $instance;
  }

  private function populate() {
    $invite = new Invite();
    $propMap = $contest->getClientMapping();
    
    foreach($propMap as $prop => $mapping) {
      if (array_key_exists($mapping[0], $_REQUEST) === TRUE) {
        $invite->$prop = ($mapping[1] === true) ?  mysql_real_escape_string(trim($_REQUEST[$mapping[0]])) : $_REQUEST[$mapping[0]] ; 
      }
    }
    
    return $invite;
  }

  public function createInvite() { 
    $dbc = DbUtil::getDbConnection();
    $request_id = $_POST['reqid'];
    $invite_type = $_POST['type'];
    $object_id = $_POST['objid'];
    $user_ids = $_POST['user_ids'];
    
    $sql = "INSERT IGNORE INTO invite (id, request_id, fb_user_id, invite_type, object_id) VALUES ";
    $count = count($user_ids);
    for ($i = 0; $i < $count; $i++) {
      $sql .= "('', '$request_id', '$user_ids[$i]', $invite_type, $object_id)";
      if ($i < $count -1) {
        $sql .= ",";
      }
    }

    $result = $this->queryDB($sql, $dbc, "createInvite");
    return $result;
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
