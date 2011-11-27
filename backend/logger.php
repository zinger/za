<?php

require_once('log4php/Logger.php');

$logger;
config_logger();

function config_logger() {
  global $logger;

  if ($logger == null) {
    date_default_timezone_set('America/Los_Angeles');
    Logger::configure('log4php.properties');
    $logger = Logger::getLogger("za");
    $logger->info("init");
  }
}

?>
