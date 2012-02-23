-- MySQL dump 10.13  Distrib 5.1.52, for redhat-linux-gnu (i386)
--
-- Host: localhost    Database: za
-- ------------------------------------------------------
-- Server version	5.1.52

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `za`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `za` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `za`;

--
-- Table structure for table `contest`
--

/* TODO make fb_pid, fb_object_id, fb_pname consistent across all tables in terms of storage */
DROP TABLE IF EXISTS `contest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `tag_line` varchar(1024) DEFAULT NULL,
  `start_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `submission_end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `contest_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `entry_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `description` varchar(5000) DEFAULT NULL,
  `tags` varchar(1025) DEFAULT NULL,
  `who_can_participate` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `invite_others` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0', // 0 = draft, 1 = final
  `cause_id` int(10) unsigned DEFAULT NULL,
  `fb_object_id` varchar(255) DEFAULT NULL,
  `big_url` varchar(255) DEFAULT NULL,
  `med_url` varchar(255) DEFAULT NULL,
  `small_url` varchar(255) DEFAULT NULL,
  `fb_pid` varchar(255) DEFAULT NULL, /* TODO change this to not null at a later date */
  `fb_pname` varchar(255) DEFAULT NULL, /* TODO change this to not null at a later date */
  `featured` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `featured_start_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `featured_end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `num_parts` int(10) unsigned NOT NULL DEFAULT '0',
  `num_entries` int(10) unsigned NOT NULL DEFAULT '0',
  `created_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `updated_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contest_stats`
--

DROP TABLE IF EXISTS `contest_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest_stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `contest_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `num_entries` int(10) unsigned NOT NULL DEFAULT '0',
  `num_participants` int(10) unsigned NOT NULL DEFAULT '0',
  `num_fb_likes` int(10) unsigned NOT NULL DEFAULT '0',
  `num_shares` int(10) unsigned NOT NULL DEFAULT '0',
  `num_comments` int(10) unsigned NOT NULL DEFAULT '0',
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `conteststats_contestid` (`contest_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contest_stats`
--

DROP TABLE IF EXISTS `invite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invite` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `request_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `fb_user_id` varchar(255) NOT NULL, /* TODO change this to not null at a later date */
  `invite_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `object_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Table structure for table `entry`
--

DROP TABLE IF EXISTS `entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entry` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(1024) DEFAULT NULL,
  `entry_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `big_url` varchar(255) DEFAULT NULL,
  `med_url` varchar(255) DEFAULT NULL,
  `small_url` varchar(255) DEFAULT NULL,
  `fb_pid` bigint(20) unsigned DEFAULT NULL,
  `fb_pname` varchar(255) DEFAULT NULL,
  `fb_object_id` bigint(20) unsigned DEFAULT NULL,
  `text_entry_id` bigint(20) unsigned DEFAULT NULL,
  `tags` varchar(1025) DEFAULT NULL,
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `category` varchar(80) DEFAULT NULL,
  `contest_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `created_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `entry_vote_details`
--

DROP TABLE IF EXISTS `entry_vote_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entry_vote_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `entry_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `voter_fb_pid` bigint(20) unsigned NOT NULL,  
  `vote` tinyint(3) unsigned NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `entry_stats`
--

DROP TABLE IF EXISTS `entry_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entry_stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `entry_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `num_fb_likes` int(10) unsigned NOT NULL DEFAULT '0',
  `num_shares` int(10) unsigned NOT NULL DEFAULT '0',
  `num_comments` int(10) unsigned NOT NULL DEFAULT '0',
  `num_votes` int(10) unsigned NOT NULL DEFAULT '0',
  `vote_total` int(10) unsigned DEFAULT 0,
  `vote_average` int(10) unsigned DEFAULT 0,
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `entrystats_entryid` (`entry_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `newsfeed`
--

DROP TABLE IF EXISTS `newsfeed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newsfeed` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `action_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `entity_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `entity_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `newsfeed_userid` (`user_id`),
  UNIQUE KEY `newsfeed_actiontype` (`action_type`),
  UNIQUE KEY `newsfeed_entityid` (`entity_id`),
  UNIQUE KEY `newsfeed_entitytype` (`entity_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `search_tags`
--

DROP TABLE IF EXISTS `search_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `search_tags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(40) NOT NULL,
  `entity_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `entity_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `created_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `updated_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `searchtags_tagname` (`tag_name`),
  UNIQUE KEY `searchtags_entitytype` (`entity_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `social_actions`
--

DROP TABLE IF EXISTS `social_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_actions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `action_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `entity_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `entity_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `action_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `action_location` tinyint(3) unsigned DEFAULT NULL,
  `fb_post_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `socialactions_actiontype` (`action_type`),
  UNIQUE KEY `socialactions_userid` (`user_id`),
  UNIQUE KEY `socialactions_entityid` (`entity_id`),
  UNIQUE KEY `socialactions_actionlocation` (`action_location`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `text_entry`
--

DROP TABLE IF EXISTS `text_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `text_entry` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `entry_id` bigint(20) unsigned NOT NULL,
  `entry` longtext NOT NULL,
  `created_by_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `textentry_entryid` (`entry_id`),
  UNIQUE KEY `textentry_createdbyid` (`created_by_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `fb_user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `join_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_fbuserid` (`fb_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-11-27  2:30:43
