<?php

class Invite {
  public $request_id;
  public $fb_user_id;
  public $invite_type; // 0 = contest, 1 = app
  public $object_id; // e.g. id of contest if invite is for contest

  // Contest property => (client attr, esc?)
  private static $clientPropMapping = array(
    'request_id'          => array ('reqid'  , false),
    'fb_user_id'          => array ('fbuid'  , false),
    'invite_type'         => array ('type'   , false),
    'object_id'           => array ('oid'    , false),
  );

  public function getClientMapping() {
    return self::$clientPropMapping;
  }

}

?>
