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

  public function createEntry($entry) {
    //todo

  }

}



?>
