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
-- Table structure for table `problem`
--

DROP TABLE IF EXISTS `problem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problem` (
  `problem_name` varchar(100) NOT NULL,
  `points` int NOT NULL,
  `answer` varchar(100) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `ctf_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`problem_name`),
  KEY `category_name` (`category_name`),
  KEY `ctf_name` (`ctf_name`),
  CONSTRAINT `problem_ibfk_1` FOREIGN KEY (`category_name`) REFERENCES `category` (`category_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `problem_ibfk_2` FOREIGN KEY (`ctf_name`) REFERENCES `ctf_comp` (`ctf_name`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problem`
--

LOCK TABLES `problem` WRITE;
/*!40000 ALTER TABLE `problem` DISABLE KEYS */;
INSERT INTO `problem` VALUES ('Authority',300,'picoCTF{j5_15_7r4n5p4r3n7_a8788e61}','Web',NULL),('Filter',300,'picoCTF{0n3_m0r3_t1m3_e2db86ae880862ad471aa4c93343b2bf}','Web',NULL),('Forbidden Paths',300,'picoCTF{7h3_p47h_70_5ucc355_6db46514}','Web',NULL),('Inspect',300,'picoCTF{1nclu51v17y_1of2_ f7w_2of2_df589022}','Web',NULL),('Johnny',200,'itctf{jhonny_a1e_1he_sugar}','Forensics',NULL),('login',300,'picoCTF{53rv3r_53rv3r_53rv3r_53rv3r_53rv3r}','Web',NULL),('Magic',200,'itctf{mag1c_numb3rs_ar3_c00l}','Forensics',NULL),('Maximize',200,'itctf{Y0u_f0und_1t}','Forensics',NULL),('MOD',200,'itctf{Y0u_ar3_ma513r_0f_m0d}','Cryptography',NULL),('Zig\'s Misery',200,'itctf{3v3ry_k1nd_0f_shark_1s_c00l}','Forensics',NULL);
/*!40000 ALTER TABLE `problem` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `problemcountofcategory` AFTER INSERT ON `problem` FOR EACH ROW begin
if new.category_name='Forensics' then
update category set Problem_counts=Problem_counts+1 where category_name='Forensics';
elseif new.category_name='Web' then
update category set Problem_counts=Problem_counts+1 where category_name='Web';
else 
update category set Problem_counts=Problem_counts+1 where category_name='Cryptography';
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 10:42:23
