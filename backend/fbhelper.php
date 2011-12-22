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

  /** @returns Photo fb object. Use photo['picture'] to get the profile pic url */
  public static function getUserPicture($fb = null, $uid = null) {
    global $logger;

    if (is_null($fb)) {
      $fb = self::getFacebook();
    }
    $token = $fb->getAccessToken(); //token optional
    $user = (!empty($uid)) ? $uid : "me";
    try {
      $url = "/" . $user . "?fields=picture&access_token=" . $token;
      $ph = $fb->api($url);
    } catch (Exception $e) {
      $logger->info("FBHelper::getUserPicture:Exception: " . $e->getTraceAsString());
    }
    return $ph;
  }

  /** @returns String with photo url. Can be used in client html 
   * as image src '<img src="' . $s . '" alt="Profile Pic" />' 
   */
  public static function getUserPictureSrc($userid) {
    $src = "https://graph.facebook.com/" . $userid . "/picture/";
    return $src; 
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

  public static function uploadPhoto($img, $caption = null, $fb = null) {
    global $logger;

    if (($path = realpath($img)) === FALSE) {
      return false;
    }

    if (is_null($fb)) {
      $fb = self::getFacebook();
    }
    $msg = ((!empty($caption)) && (is_string($caption))) ? $caption : "Zing photo";

    try {
      $photo = $fb->api('/me/photos', 'POST',
                        array('source' => '@' . $path,
                              'message'=> $msg
                        )); 
      $id = $photo['id'];
      $logger->info("FBHelper::uploadPhoto:ImagePath: " . $path . " | Caption: " . $msg . " | PhotoID: " . $id);
    } catch (Exception $e) {
      $logger->info("FBHelper::uploadPhoto:Exception: " . $e->getMessage());
      $logger->info("ExceptionTrace: " . $e->getTraceAsString());
    }
    return $photo;
  }

  public static function getScope() {
    $scope = implode(",", Config::$FB_APP_SCOPE);
    return $scope;
  }
  
}

?>
