<?php

class Entry {
  public $id;
  public $name;
  public $description;
  public $entry_type;
  public $fb_object_id;
  public $big_url;
  public $med_url;
  public $small_url;
  public $fb_pname;
  public $fb_pid;
 // public $fb_pthumb_url;
 // public $fb_purl;
 // public $fb_plink; // what is this?
  public $text_entry_id;
  public $tags;
  public $status;
  public $category;
  public $contest_id;

  private static $clientPropertyMapping = array(
    'name'         => array('title', true),
    'description'  => array('desc', true),
    'entry_type'   => array('type', false),
    'fb_object_id' => array('fboid', false),
    'big_url'      => array('burl', false),
    'med_url'      => array('murl', false),
    'small_url'    => array('surl', false),
    'fb_pname'     => array('fbpname', false),
    'fb_pid'       => array('fbpid', false),
 //   'fb_pthumb_url' => array('fbpthumb', false),
 //   'fb_purl'       => array('fbpurl', false),
 //   'fb_plink'      => array('fbplink', false),
    'text_entry_id' => array('txteid', false),
    'tags'          => array('tags', true),
    'status'        => array('status', false),
    'category'      => array('category', false),
    'contest_id'    => array('cid', false)
  );
  
  public function getClientMapping() {
    return self::$clientPropertyMapping;
  }
}
?> 
