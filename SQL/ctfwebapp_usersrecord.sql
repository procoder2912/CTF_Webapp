-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ctfwebapp
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usersrecord`
--

DROP TABLE IF EXISTS `usersrecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersrecord` (
  `username` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `dateandtime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersrecord`
--

LOCK TABLES `usersrecord` WRITE;
/*!40000 ALTER TABLE `usersrecord` DISABLE KEYS */;
INSERT INTO `usersrecord` VALUES ('mhacker','Abhishek Deore','2023-10-23 07:16:19'),('red_panda','Anna Kendrick','2023-10-23 07:33:44'),('whiterose','Anna Hayes','2023-11-09 18:47:48'),('kind','123243','2023-11-29 17:46:06'),('','','2023-11-30 10:12:42'),('','','2023-11-30 10:16:19'),('asdsa','asds','2023-11-30 11:19:08'),('asdas','asda','2023-11-30 11:22:34'),('asds','asds','2023-11-30 11:29:34'),('asda','asda','2023-11-30 11:31:13'),('asda','asdsa','2023-11-30 11:33:17'),('asdaaasds','asad','2023-11-30 11:38:34'),('red_wolf','Ross Geller','2023-11-30 14:28:48');
/*!40000 ALTER TABLE `usersrecord` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 10:42:23
