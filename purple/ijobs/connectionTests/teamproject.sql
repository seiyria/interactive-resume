-- MySQL dump 10.13  Distrib 5.5.24, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: schmil19
-- ------------------------------------------------------
-- Server version	5.5.24-0ubuntu0.12.04.1

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
-- Table structure for table `dailyscores`
--

DROP TABLE IF EXISTS `dailyscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dailyscores` (
  `dsid` int(6) NOT NULL AUTO_INCREMENT,
  `userid` int(6) NOT NULL,
  `score` bigint(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`dsid`),
  UNIQUE KEY `userid` (`userid`),
  CONSTRAINT `dailyscores_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailyscores`
--

LOCK TABLES `dailyscores` WRITE;
/*!40000 ALTER TABLE `dailyscores` DISABLE KEYS */;
INSERT INTO `dailyscores` VALUES (1,1,50,'2012-11-29 13:19:09'),(2,2,30,'2012-11-29 13:19:35'),(3,3,200,'2012-11-29 13:19:41'),(4,4,800,'2012-11-29 13:19:49'),(5,5,100,'2012-11-29 13:19:57'),(6,6,1000,'2012-11-29 13:20:13'),(7,7,1700,'2012-11-29 13:20:20'),(8,8,700,'2012-11-29 13:20:25'),(9,9,300,'2012-11-29 13:20:35'),(10,10,1800,'2012-11-29 13:20:42'),(11,12,90,'2012-11-29 13:20:54'),(12,13,900,'2012-11-29 13:20:59');
/*!40000 ALTER TABLE `dailyscores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab9_users`
--

DROP TABLE IF EXISTS `lab9_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lab9_users` (
  `id` int(3) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab9_users`
--

LOCK TABLES `lab9_users` WRITE;
/*!40000 ALTER TABLE `lab9_users` DISABLE KEYS */;
INSERT INTO `lab9_users` VALUES (1,'user1','abcdefgh',NULL),(2,'user2','123456','abc@def.com'),(3,'user3','password',NULL);
/*!40000 ALTER TABLE `lab9_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monthlyscores`
--

DROP TABLE IF EXISTS `monthlyscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monthlyscores` (
  `msid` int(6) NOT NULL,
  `userid` int(6) NOT NULL,
  `score` bigint(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`msid`),
  UNIQUE KEY `userid` (`userid`),
  CONSTRAINT `monthlyscores_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monthlyscores`
--

LOCK TABLES `monthlyscores` WRITE;
/*!40000 ALTER TABLE `monthlyscores` DISABLE KEYS */;
/*!40000 ALTER TABLE `monthlyscores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `overallscores`
--

DROP TABLE IF EXISTS `overallscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `overallscores` (
  `osid` int(6) NOT NULL,
  `userid` int(11) NOT NULL,
  `score` bigint(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`osid`),
  UNIQUE KEY `userid` (`userid`),
  CONSTRAINT `overallscores_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overallscores`
--

LOCK TABLES `overallscores` WRITE;
/*!40000 ALTER TABLE `overallscores` DISABLE KEYS */;
/*!40000 ALTER TABLE `overallscores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `country` varchar(20) NOT NULL,
  `postalcode` int(10) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `joindate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'afaik','pass1234','afaik@woot.com','usa',54901,NULL,'2012-11-29'),(2,'martymcfly','pass1234','outatime@woot.com','usa',92274,NULL,'2012-11-29'),(3,'that1guy','pass1234','somewhere@lantis.com','jpn',2300023,NULL,'2012-11-29'),(4,'darthspacer','pass1234','nothatbad@misunderstood.com','chn',92274,NULL,'2012-11-29'),(5,'actualp1l0t','pass1234','bestpilot@pilotschool.com','usa',54901,NULL,'2012-11-29'),(6,'winningpl0x','pass1234','winner@victory.com','usa',54901,NULL,'2012-11-29'),(7,'VictorE','pass1234','something@emailz.com','srb',NULL,NULL,'2012-11-29'),(8,'KrZyGuY','pass1234','wacky@wackiness.net','lka',NULL,NULL,'2012-11-29'),(9,'8bits','pass1234','oldschool@someschool.gov','per',NULL,NULL,'2012-11-29'),(10,'RandomHero','pass1234','sav3stehday@ggg.com','usa',NULL,NULL,'2012-11-29'),(11,'theRealGGG','pass1234','niceguy@misunderstood.com','zaf',NULL,NULL,'2012-11-29'),(12,'10Guy','pass1234','whereami@threethirty.com','jam',NULL,NULL,'2012-11-29'),(13,'Steve','pass1234','notascumbag@lies.com','jpn',NULL,NULL,'2012-11-29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weeklyscores`
--

DROP TABLE IF EXISTS `weeklyscores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weeklyscores` (
  `wsid` int(6) NOT NULL AUTO_INCREMENT,
  `userid` int(6) NOT NULL,
  `score` bigint(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`wsid`),
  UNIQUE KEY `userid` (`userid`),
  CONSTRAINT `weeklyscores_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weeklyscores`
--

LOCK TABLES `weeklyscores` WRITE;
/*!40000 ALTER TABLE `weeklyscores` DISABLE KEYS */;
/*!40000 ALTER TABLE `weeklyscores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-11-29 15:57:23
