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
    $dbc = DbUtil::getDbConnection();
    $contest = $this->populate();

    $sql = "INSERT IGNORE INTO contest (id, name, tag_line, start_date, end_date, submission_end_date, contest_type, entry_type, ";
    $sql .= "description, tags, status, cause_id, featured, featured_start_date, featured_end_date) VALUES ";
    $sql .= "('', '$contest->name', '$contest->tag_line', '$contest->start_date', '$contest->end_date', '$contest->submission_end_date', ";
    $sql .= "'$contest->contest_type', '$contest->entry_type', '$contest->description', '$contest->tags', '$contest->status', ";
    $sql .= "'$contest->cause_id', '$contest->featured', '$contest->featured_start_date', '$contest->featured_end_date')"; 

    $result = $this->queryDB($sql, $dbc, "createContest");
    return $result;
  }

  //range is on creation date
  public function getContestsByCreationDate($sd, $ed, $limit) {

    //todo: return specific columns
    $sql = "SELECT * FROM contest ";
    $sql .= ((!empty($sd) === TRUE) || (!empty($ed) === TRUE)) ? " WHERE " : "";
    if (!empty($sd) === TRUE) {
      $sql .= "date_created >= " . $sd;
      $sql .= (!empty($ed) === TRUE) ? " AND " : "";
    }
    $sql .= (!empty($ed) === TRUE) ? "date_created <= " . $ed : "";
    $sql .= " ORDER BY date_created DESC";
    $sql .= (!empty($limit) === TRUE) ? " LIMIT " . $limit : ""; 
    
    $result = $this->queryDB($sql, $dbc = null, "getContestByCreationDate");
    return $result;
  }

  //range is on submission date
  public function getContestsBySubmissionEndDate($sd, $ed, $limit) {
    $sql = "SELECT * FROM contest ";
    $sql .= ((!empty($sd) === TRUE) || (!empty($ed) === TRUE)) ? " WHERE " : "";
    if (!empty($sd) === TRUE) {
      $sql .= "submission_end_date >= " . $sd;
      $sql .= (!empty($ed) === TRUE) ? " AND " : "";
    }
    $sql .= (!empty($ed) === TRUE) ? "submission_end_date <= " . $ed : "";
    $sql .= " ORDER BY submission_end_date DESC";
    $sql .= (!empty($limit) === TRUE) ? " LIMIT " . $limit : ""; 
    
    $result = $this->queryDB($sql, $dbc = null, "getContestBySubmissionEndDate");
    return $result;
  }

  public function getContestById($id) {
    if (empty($id) === TRUE) {
      $result['result'] = FALSE;
      return result;
    }
    $sql = "SELECT * FROM contest WHERE id = " . $id;
    $result = $this->queryDB($sql, $dbc = null, "getContestById");

    return $result;
  }

  public function getContestsByCause($id) {
    if (empty($id) === TRUE) {
      $result['result'] = FALSE;
      return result;
    }
    $sql = "SELECT * FROM contest WHERE cause_id = " . $id;
    $result = $this->queryDB($sql, $dbc = null, "getContestByCauseId");

    return $result;
  }

  public function getContestsByCreator($id) {
    if (empty($id) === TRUE) {
      $result['result'] = FALSE;
      return result;
    }
    $sql = "SELECT * FROM contest WHERE created_by = " . $id;
    $result = $this->queryDB($sql, $dbc = null, "getContestsByCreator");

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
    while($row = mysql_fetch_assoc($rslt)) {
      $results[] = $row;
    }
    return $results;
  }

}

?>
