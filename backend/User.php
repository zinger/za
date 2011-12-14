<?php

class User {
  public $fb_uid;
  public $fb_username;
  public $name;
  public $first_name;
  public $last_name;
  public $gender;
  public $email;
  public $locale;

  public function getFBId() {
    return $fb_uid;
  }

  public function getName() {
    return $name;
  }

  public function getFirstName() {
    return $first_name;
  }

  public function getLastName() {
    return $last_name;
  }

  public function getFBUserName() {
    return $fb_username;
  }

  public function getGender() {
    return $gender;
  }

  public function getEmail() {
    return $email;
  }

  public function getLocale() {
    return $locale;
  }

  public function setFBId($id) {
    $fb_id = $id;
  }

  public function setName($name) {
    $name = $name;
  }

  public function setFirstName($fname) {
    $first_name = $fname;
  }

  public function setLastName($lname) {
    $last_name = $lname;
  }

  public function setFBUserName($uname) {
    $fb_username = $uname;
  }

  public function setGender($gender) {
    $gender = $gender;
  }

  public function setEmail($email) {
    $email = $email;
  }

  public function setLocale($locale) {
    $locale = $locale;
  }

  public function populate($jsonObj) {
    $fb_id       = $jsonObj['id'];
    $name        = $jsonObj['name'];
    $fb_username = $jsonObj['username'];
    $first_name  = $jsonObj['first_name'];
    $last_name   = $jsonObj['last_name'];
    $gender      = $jsonObj['gender'];
    $email       = $jsobObj['email'];
    $locale      = $jsobObj['locale'];
  }
}

?>
