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
/* old populate contest
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
*/

  private function populate($obj, $photo) {
    global $logger;
    $contest = new Contest();
    $propMap = $contest->getClientMapping();
    
    foreach($propMap as $prop => $mapping) {
      if (array_key_exists($mapping[0], $obj) === TRUE) {
        $contest->$prop = ($mapping[1] === true) ?  mysql_real_escape_string(trim($obj->$mapping[0])) : $obj->$mapping[0] ; 
      }
    }
    $logger->info("sd = $contest->start_date");
        $logger->info("ed = $contest->end_date");

    if (isset($photo)) {
      $contest->fb_object_id = $photo[id];
      $logger->info("photo id = $contest->fb_object_id");
      $contest->big_url = $photo[images][0][source];
        $logger->info("big url = $contest->big_url");
      $contest->med_url = $photo[images][1][source];
        $logger->info("med url = $contest->med_url");
      $contest->small_url = $photo[images][2][source];
        $logger->info("small url = $contest->small_url");
      $contest->fb_pid = $photo[from][id]; // TODO remove this and get fb_pid by querying graph api or pass in obj
      $logger->info("part id = $contest->fb_pid");
      $contest->fb_pname = $photo[from][name];
        $logger->info("part name = $contest->fb_pname");
    }
    return $contest;
  }

  public function createContest($obj, $photo) { 
    $dbc = DbUtil::getDbConnection();
    $contest = $this->populate($obj, $photo);

    $sql = "INSERT IGNORE INTO contest (id, name, tag_line, start_date, end_date, submission_end_date, contest_type, entry_type, ";
    $sql .= "description, tags, who_can_participate, invite_others, status, cause_id, fb_object_id, big_url, med_url, small_url, ";
    $sql .= "fb_pid, fb_pname, featured, featured_start_date, featured_end_date) VALUES ";
    $sql .= "('', '$contest->name', '$contest->tag_line', str_to_date('$contest->start_date', '%c/%e/%Y'), str_to_date('$contest->end_date','%c/%e/%Y'), str_to_date('$contest->submission_end_date','%c/%e/%Y'), ";
    $sql .= "'$contest->contest_type', '$contest->entry_type', '$contest->description', '$contest->tags', '$contest->who_can_participate', ";
    $sql .= "'$contest->invite_others', '$contest->status', '$contest->cause_id', '$contest->fb_object_id', '$contest->big_url', ";
    $sql .= "'$contest->med_url', '$contest->small_url', '$contest->fb_pid', '$contest->fb_pname', '$contest->featured', ";
    $sql .= "'$contest->featured_start_date', '$contest->featured_end_date')"; 

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
