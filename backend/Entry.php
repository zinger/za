<?php

class User {
  public $id;
  public $name;
  public $description;
  public $entry_type;
  public $url;
  public $thumb_url;
  public $fb_object_id;
  public $fb_pname;
  public $fb_pfrom_id;
  public $fb_pthumb_url;
  public $fb_purl;
  public $fb_plink;
  public $text_entry_id;
  public $tags;
  public $status;
  public $category;
  public $contest_id;

  private static $clientPropertyMapping = array(
    'name'         => array('name', true),
    'description'  => array('desc', true),
    'entry_type'   => array('type', false),
    'fb_object_id' => array('fboid', false) 
  );
  
  public function getClientMapping() {
    return self::$clientPropMapping;
  }
}
?> 
