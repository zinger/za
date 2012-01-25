<?php

class Contest {
  public $name;
  public $tag_line;
  public $start_date;
  public $end_date;
  public $submission_end_date;
  public $contest_type;
  public $entry_type;
  public $description;
  public $tags;
  public $who_can_participate;
  public $invite_others;
  public $status;
  public $cause_id;
  public $featured;
  public $featured_start_date;
  public $featured_end_date;
  public $fb_object_id;
  public $big_url;
  public $med_url;
  public $small_url;
  public $fb_pid;
  public $fb_pname;


  // Contest property => (client attr, esc?)
  private static $clientPropMapping = array(
    'name'                => array ('name'  , true),
    'tag_line'            => array ('tagl'  , true),
    'start_date'          => array ('sd'    , false),
    'end_date'            => array ('ed'    , false),
    'submission_end_date' => array ('sed'   , false),
    'contest_type'        => array ('ctype' , false),
    'entry_type'          => array ('etype' , false),
    'description'         => array ('desc'  , true),
    'tags'                => array ('tags'  , true),
    'who_can_participate' => array ('whocan', true),
    'invite_others'       => array ('invothers', false),
    'status'              => array ('status', false),
    'cause_id'            => array ('cause' , false),
    'fb_object_id'        => array ('fboid' , false),
    'big_url'             => array ('burl'  , false),
    'med_url'             => array ('murl'  , false),
    'small_url'           => array ('surl'  , false),
    'fb_pid'              => array ('fbpid' , false),
    'fb_pname'            => array ('fbpname', false),
    'featured'            => array ('isf'   , false), 
    'featured_start_date' => array ('fsd'   , false),
    'featured_end_date'   => array ('fed'   , false)
  );

  public function getClientMapping() {
    return self::$clientPropMapping;
  }

}

?>
