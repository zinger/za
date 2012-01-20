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
    $fb_pid = $photo[from][id];
        $logger->info("part id = $fb_pid");

    $fb_pname = $photo[from][name];
        $logger->info("part name = $fb_pname");

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
    $sql .= "'$med_url', '$small_url', '$fb_pname', '$fb_pid', ";
    $sql .= "'$entry->text_entry_id', '$entry->tags', '$entry->status', '$entry->category', '$entry->contest_id')"; 

    $result = $this->queryDB($sql, $dbc, "createEntry");
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
