<?php

require_once('logger.php');
require_once('common/DbUtil.php');
require_once('Contest.php');

class ContestService {

  private $instance;
  private function __construct() {}

  public function instance() {
    if (!$instance instanceof ContestService) {
      $instance = new ContestService();
    }
    return $instance;
  }

  private function populate() {
    $contest = new Contest();
    $propMap = $contest->getClientMapping();
    
    foreach($propMap as $prop => $mapping) {
      if (array_key_exists($mapping[0], $_REQUEST) === TRUE) {
        $contest->$prop = ($mapping[1] === true) ?  mysql_real_escape_string(trim($_REQUEST[$mapping[0]])) : $_REQUEST[$mapping[0]] ; 
      }
    }
    
    return $contest;
  }

  public function createContest() { 
    global $logger;
    $dbc = DbUtil::getDbConnection();
    $contest = $this->populate();

    $sql = "INSERT IGNORE INTO contest (id, name, tag_line, start_date, end_date, submission_end_date, contest_type, entry_type, ";
    $sql .= "description, tags, status, cause_id, featured, featured_start_date, featured_end_date) VALUES ";
    $sql .= "('', '$contest->name', '$contest->tag_line', '$contest->start_date', '$contest->end_date', '$contest->submission_end_date', ";
    $sql .= "'$contest->contest_type', '$contest->entry_type', '$contest->description', '$contest->tags', '$contest->status', ";
    $sql .= "'$contest->cause_id', '$contest->featured', '$contest->featured_start_date', '$contest->featured_end_date')"; 

    $logger->debug($sql);

    if (($rslt = mysql_query($sql, $dbc)) === FALSE) {
      $logger->error("createContest: Failed to insert contest " . mysql_error());
    }
   
    $result['status'] = $rslt; 
    return $result;
  }
}

?>
