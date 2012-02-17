<?php

require_once('logger.php');
require_once('common/DbUtil.php');
require_once('Entry.php');

class EntryService {
  
  private $instance;
  private function __construct() {}

  public function instance() {
    if (!$instance instanceof EntryService) {
      $instance = new EntryService();
    }
    return $instance;
  }

  private function getFBPhotoAttrs($entry) {
    //todo
  }
  
  private function populate() {
    $entry = new Entry();
    $propMap = $entry->getClientMapping();
    
    foreach($propMap as $prop => $mapping) {
      if (array_key_exists($mapping[0], $_REQUEST) === TRUE) {
        $entry->$prop = ($mapping[1] === true) ?  mysql_real_escape_string(trim($_REQUEST[$mapping[0]])) : $_REQUEST[$mapping[0]] ; 
      }
    } 
    return $entry;
  }

  public function createEntry($photo) {
    global $logger;
    //$logger->info("EntryService::createEntry photo " . print_r($ph));

    $dbc = DbUtil::getDbConnection();
    $entry = $this->populate();
    $fb_object_id = $photo[id];
    $logger->info("photo id = $fb_object_id");
    //$fb_pid = $photo[from][id];
    //    $logger->info("part id = $fb_pid");

    //$fb_pname = $photo[from][name];
    //    $logger->info("part name = $fb_pname");

  //  $entry->url = $photo->source;
    $big_url = $photo[images][0][source];
    $logger->info("big url = $big_url");

    $med_url = $photo[images][1][source];
        $logger->info("med url = $med_url");

    $small_url = $photo[images][2][source];
        $logger->info("small url = $small_url");


    $sql = "INSERT INTO entry (id, name, description, entry_type, fb_object_id, big_url, med_url, small_url, fb_pname, ";
    $sql .= "fb_pid, text_entry_id, tags, status, category, contest_id) VALUES ";
    $sql .= "('', '$entry->name', '$entry->description', '$entry->entry_type', '$fb_object_id', '$big_url', ";
    $sql .= "'$med_url', '$small_url', '$entry->fb_pname', '$entry->fb_pid', ";
    $sql .= "'$entry->text_entry_id', '$entry->tags', '$entry->status', '$entry->category', '$entry->contest_id')"; 

    $result = $this->queryDB($sql, $dbc, "createEntry");

    if ($result['result'][0] === TRUE) {
      $res = mysql_query('SELECT LAST_INSERT_ID()');
      $row = mysql_fetch_array($res);
      $lastInsertId = $row[0];
      $sql = "INSERT INTO entry_stats (id, entry_id) VALUES ('', '$lastInsertId')";
      $result = $this->queryDB($sql, $dbc, "insertEntryStats");
      if ($result['result'][0] === TRUE) {
        if ($_POST['newpart'] === TRUE) $new_part = 1;
        else $new_part = 0;
        $sql = "UPDATE contest SET num_entries = num_entries+1, num_parts = num_parts + '$new_part'";
        $sql .= " WHERE id = '$entry->contest_id'";
        $result = $this->queryDB($sql, $dbc, "updateContest");
      }
    }
    return $result;
  }
  
  public function saveVote() {
    global $logger;

    $dbc = DbUtil::getDbConnection();
    $entry_id = $_REQUEST['eid'];
    $voter_fb_pid = $_REQUEST['voterid'];
    $vote = $_REQUEST['vote'];
    
    $sql = "INSERT INTO entry_vote_details (id, entry_id, voter_fb_pid, vote) VALUES ";
    $sql .= "('', '$entry_id', '$voter_fb_pid', '$vote') ";

    $result = $this->queryDB($sql, $dbc, "saveVote");
    if ($result['result'][0] === TRUE) {
       $sql = "UPDATE entry_stats SET num_votes = num_votes+1, vote_total = vote_total+$vote, vote_average = ";
       $sql .= "((num_votes*vote_average)+$vote)/(num_votes+1) WHERE entry_id = '$entry_id'";
       $result = $this->queryDB($sql, $dbc, "updateEntryStats");
       if ($result['result'][0] === TRUE) {
          $sql = "SELECT * FROM entry_stats WHERE entry_id = '$entry_id'";
          $result = $this->queryDB($sql, $dbc, "fetchUpdatedEntryStats");
       }
    }
    return $result;
  }
  
  public function getEntries($cid, $fbpid) {
    $sql = "SELECT * FROM entry WHERE 1=1";
    if (!empty($cid) === TRUE) {
      $sql .= " AND contest_id = " . $cid;
    }
    if (!empty($fbpid) === TRUE) {
      $sql .= " AND fb_pid = " . $fbpid;
    }
    $sql .= " ORDER BY date_created DESC";
    
    $result = $this->queryDB($sql, $dbc = null, "getEntries");
    return $result;
  }
  
  public function getVote($eid, $fbpid) {
    $sql = "SELECT * FROM entry_vote_details WHERE 1=1";
    if (!empty($eid) === TRUE) {
      $sql .= " AND entry_id = " . $eid;
    }
    if (!empty($fbpid) === TRUE) {
      $sql .= " AND voter_fb_pid = " . $fbpid;
    }
    $sql .= " ORDER BY date_created DESC";
    
    $result = $this->queryDB($sql, $dbc = null, "getEntries");
    return $result;
  }

  public function getEntryStats($eid) {
    $sql = "SELECT * FROM entry_stats WHERE 1=1";
    if (!empty($eid) === TRUE) {
      $sql .= " AND entry_id = " . $eid;
    }
    
    $result = $this->queryDB($sql, $dbc = null, "getEntryStats");
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
