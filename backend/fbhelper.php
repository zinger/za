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
      $url = "/" . $id . "?access_token=" . $token;
      //$url = "/" . 98423808305; 
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
      return 'falses';
    }
	
    if (is_null($fb)) {
      $fb = self::getFacebook();
    }
    $msg = ((!empty($caption)) && (is_string($caption))) ? $caption : "Zing photo";
	
	$me = $fb->api('/me');
	/*echo "<pre>";print_r($me); echo "</pre>";
	die('wo hi');
    */
	
	try {
      $photo = $fb->api('/me/photos', 'POST',
                        array('source' => '@' . $path,
                              'message'=> $msg
                        ));
	  
	  /*echo 'posted <br />';
      $id = $photo['id'];
	  echo $id."<br />";
	  */
	  
      $logger->info("FBHelper::uploadPhoto:ImagePath: " . $path . " | Caption: " . $msg . " | PhotoID: " . $id);
    } catch (Exception $e) {
		/*echo "error<br />";
		echo $e->getMessage()."<br /><br />";
		echo $e->getTraceAsString()."<br />";
		*/
      $logger->info("FBHelper::uploadPhoto:Exception: " . $e->getMessage());
      $logger->info("ExceptionTrace: " . $e->getTraceAsString());
    }
    return $photo;
	
  }

  public static function getScope() {
    $scope = implode(",", Config::$FB_APP_SCOPE);
    return $scope;
  }
  
  public static function getComments() {
	   $url = 'http://sabdekho.com/projects/zatest/comment.php';
	
		$lastCommentTime_query = mysql_query("SELECT time FROM comment ORDER BY time DESC LIMIT 0,1") or die(mysql_error());
		if(mysql_num_rows($lastCommentTime_query)>0)
		{
			$lastCommentTime = mysql_fetch_array($lastCommentTime_query);
			$commentTime = $lastCommentTime['time'];
		}
		else
			$commentTime = 0;
			
		$lastReplyTime_query = mysql_query("SELECT time FROM reply ORDER BY time DESC LIMIT 0,1");
		if(mysql_num_rows($lastReplyTime_query)>0)
		{
			$lastReplyTime = mysql_fetch_array($lastReplyTime_query);
			$replyTime = $lastReplyTime['time'];
		}
		else
			$replyTime = 0;
		
	$comment_queries = array('cq1' => 'select post_fbid, fromid, object_id, text, time from comment where object_id in (select comments_fbid from link_stat where url ="'.$url.'") AND time>"'.$commentTime.'"',
							'cq2' => 'select name, id, url, pic_square from profile where id in (select fromid from #cq1)',
							);
	
	$reply_queries = array('rq1' => 'select post_fbid, fromid, object_id, text, time from comment where object_id in (select post_fbid from comment where object_id in (select comments_fbid from link_stat where url ="'.$url.'")) AND time>"'.$replyTime.'"',
							'rq2' => 'select name, id, url, pic_square from profile where id in (select fromid from #rq1)',
							);
	// fql multiquery to fetch all the data we need to display in one go
	/*$queries = array('q1' => 'select post_fbid, fromid, object_id, text, time from comment where object_id in (select comments_fbid from link_stat where url ="'.$url.'")',
					 'q2' => 'select post_fbid, fromid, object_id, text, time from comment where object_id in (select post_fbid from #q1)',
					 'q3' => 'select name, id, url, pic_square from profile where id in (select fromid from #q1) or id in (select fromid from #q2)',
					 );
	*/
	// note format json-strings is necessary because 32-bit php sucks at decoding 64-bit ints :(
	$result = json_decode(@file_get_contents('http://api.facebook.com/restserver.php?format=json-strings&method=fql.multiquery&queries='.urlencode(json_encode($comment_queries))));
	
	if($result)
	{
		$comments = $result[0]->fql_result_set;
		if(sizeof($comment)==0)
		{
			$users = $result[1]->fql_result_set;
			foreach($users AS $userval)
			{
				$user[$userval->id]['pic_square'] = $userval->pic_square;
				$user[$userval->id]['url'] = $userval->url;
			}
			
			foreach($comments AS $value)
			{
				mysql_query("INSERT INTO comment SET comment_fbid='".$value->post_fbid."', user_fbid='".$value->fromid."', text='".$value->text."', time='".$value->time."', pic_square='".$user[$value->fromid]['pic_square']."', url='".$user[$value->fromid]['url']."'") or die(mysql_error());
			}
		}
		else
		{
			//echo "no new comment";	
		}
		//saveComments($result);
		/*echo "<pre>";
		print_r($result);
		echo "</pre>";*/
		
		//return result;
	}
	
	$result2 = json_decode(@file_get_contents('http://api.facebook.com/restserver.php?format=json-strings&method=fql.multiquery&queries='.urlencode(json_encode($reply_queries))));
	
	/*echo "<pre>";
	print_r($result2);
	echo "</pre>";
	*/
	
	if($result2)
	{
		$replies = $result2[0]->fql_result_set;
		if(sizeof($comment)==0)
		{
			$users = $result2[1]->fql_result_set;
			foreach($users AS $userval)
			{
				$user[$userval->id]['pic_square'] = $userval->pic_square;
				$user[$userval->id]['url'] = $userval->url;
			}
			
			foreach($replies AS $value)
			{
				mysql_query("INSERT INTO reply SET comment_fbid='".$value->object_id."', reply_fbid='".$value->post_fbid."', user_fbid='".$value->fromid."', text='".$value->text."', time='".$value->time."', pic_square='".$user[$value->fromid]['pic_square']."', url='".$user[$value->fromid]['url']."'") or die(mysql_error());
			}
		}
		else
		{
			//echo "no new comment";	
		}
	}
	//die;
  }
  
}

?>
