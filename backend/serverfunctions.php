<?php

//require_once('logger.php');
require_once('common/DbUtil.php');

function createContest() {
  global $logger;
  $dbc = DbUtil::getDbConnection();

  $name       = mysql_real_escape_string(array_key_exists('name', $_REQUEST) === TRUE ? $_REQUEST['name'] : null);
  $tag_line   = mysql_real_escape_string(array_key_exists('tag_line', $_REQUEST) === TRUE ? $_REQUEST['tag_line'] : null);
  $start_date = array_key_exists('start_date', $_REQUEST) === TRUE ? $_REQUEST['start_date'] : null;
  $end_date   = array_key_exists('end_date', $_REQUEST) === TRUE ? $_REQUEST['end_date'] : null;
  $submission_end_date = array_key_exists('submission_end_date', $_REQUEST) === TRUE ? $_REQUEST['submission_end_date'] : null;
  $contest_type = array_key_exists('contest_type', $_REQUEST) === TRUE ? $_REQUEST['contest_type'] : null;
  $entry_type   = array_key_exists('entry_type', $_REQUEST) === TRUE ? $_REQUEST['entry_type'] : null;
  $description  = mysql_real_escape_string(array_key_exists('description', $_REQUEST) === TRUE ? $_REQUEST['description'] : null);
  $tags         = mysql_real_escape_string(array_key_exists('tags', $_REQUEST) === TRUE ? $_REQUEST['tags'] : null);
  $status       = array_key_exists('status', $_REQUEST) === TRUE ? $_REQUEST['status'] : null;
  $cause_id     = array_key_exists('cause_id', $_REQUEST) === TRUE ? $_REQUEST['cause_id'] : null;
  $url          = mysql_real_escape_string(array_key_exists('url', $_REQUEST) === TRUE ? $_REQUEST['url'] : null); 
  $featured     = array_key_exists('featured', $_REQUEST) === TRUE ? $_REQUEST['featured'] : null;
  $featured_start_date = array_key_exists('featured_start_date', $_REQUEST) === TRUE ? $_REQUEST['featured_start_date'] : null;
  $featured_end_date   = array_key_exists('featured_end_date', $_REQUEST) === TRUE ? $_REQUEST['featured_end_date'] : null;

  $sql = "INSERT IGNORE INTO contest (id, name, tag_line, start_date, end_date, submission_end_date, contest_type, entry_type, ";
  $sql .= "description, tags, status, cause_id, url, featured, featured_start_date, featured_end_date) VALUES ";
  $sql .= "('', '$name', '$tag_line', '$start_date', '$end_date', '$submission_end_date', '$contest_type', '$entry_type', ";
  $sql .= "'$description', '$tags', '$status', '$cause_id', '$url', '$featured', '$featured_start_date', '$featured_end_date')"; 

  $logger->debug($sql);

  if (!mysql_query($sql, $dbc)) {
    $logger->error("createContest: Failed to insert contest " . mysql_error());
  }

  $result['status'] = true;

  return $result;
}


?>
