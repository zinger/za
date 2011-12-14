<?php
require_once('common/Config.php');
require_once('common/constants.php');
require_once('facebook.php');
require_once('logger.php');

class FBHelper {

  public static function getFacebook() {
    global $logger;
    try {
      $fb = new Facebook(array(
        'appId' => FB_APP_ID, 
        'secret' => FB_SECRET,
        'fileUpload' => true));  
      return $fb;
    } catch (Exception $e) {
      $logger->info("FBHelper::getFacebook:Exception: " . $e->getTraceAsString());    
    }
  }

  public static function getFBLoginUrl($fb = null) {
    global $logger;
    if (is_null($fb)) {
      $fb = self::getFacebook();
    }

    $scope = implode(",", Config::$FB_APP_SCOPE);
    $url = $fb->getLoginUrl(array('scope' => $scope));
    $logger->info("FBHelper::getFBLoginUrl:URL: " . $url);
    return $url;
  }

  /** @returns JSON String */
  public static function getFBUserInfo($fb = null) {
    global $logger;
    $data = array();

    if (is_null($fb)) {
      $fb = self::getFacebook();
    }

    try {
      $url = "/me?access_token=" . $fb->getAccessToken();
      $data = $fb->api($url);
    } catch (Exception $e) {
      $logger->info("FBHelper::getFBUser:Exception: " . $e->getTraceAsString());
    }
    return $data;
  }

  public static function getUserPicture($fb = null, $uid = null) {
    global $logger;

    if (is_null($fb)) {
      $fb = self::getFacebook();
    }
    $token = $fb->getAccessToken(); 
    $user = (!empty($uid)) ? $uid : "me";
    try {
      $url = "/" . $user . "/picture?access_token=" . $token;
      $logger->info("FBHelper::getUserPicture:Url: " . $url);
      $ph = $fb->api($url);
    } catch (Exception $e) {
      $logger->info("FBHelper::getUserPicture:Exception: " . $e->getTraceAsString());
    }
    return $ph;
  }

  public static function getPictureById($fb =null, $id = null) {
    global $logger;

    if (is_null($fb)) {
      $fb = self::getFacebook();
    }
    $token = $fb->getAccessToken(); 
    try {
      //$url = "/" . $id . "?access_token=" . $token;
      $url = "/" . 98423808305; 
      $logger->info("FBHelper::getPictureById:Url: " . $url);
      $ph = $fb->api($url);
    } catch (Exception $e) {
      $logger->info("FBHelper::getPictureById:Exception: " . $e->getTraceAsString());
    }
    return $ph;
  }

}

?>
