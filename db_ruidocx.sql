-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: mysql.ruidocx.com    Database: db_ruidocx
-- ------------------------------------------------------
-- Server version	5.7.29-log

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
-- Table structure for table `actividad`
--

DROP TABLE IF EXISTS `actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividad` (
  `idActividad` int(11) NOT NULL AUTO_INCREMENT,
  `idPuestoDeTrabajo` int(11) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `descripcionActividad` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `npsA` decimal(5,2) DEFAULT NULL,
  `npsAEquivalente` decimal(5,2) DEFAULT NULL,
  `npsAEquivalenteEstableCopy1` decimal(5,2) DEFAULT NULL,
  `npsAEquivalenteImpulsivo` decimal(5,2) DEFAULT NULL,
  `npsAMedido` decimal(5,2) DEFAULT NULL,
  `npsAMedidoEstable` decimal(5,2) DEFAULT NULL,
  `npsAmedidoImpulsivo` decimal(5,2) DEFAULT NULL,
  `npsC` decimal(5,2) DEFAULT NULL,
  `npsCEquivalente` decimal(5,2) DEFAULT NULL,
  `npsCEquivalenteEstable` decimal(5,2) DEFAULT NULL,
  `npsCEquivalenteImpulsivo` decimal(5,2) DEFAULT NULL,
  `npsC_medido` decimal(5,2) DEFAULT NULL,
  `npsCMedidoEstable` decimal(5,2) DEFAULT NULL,
  `npsCMedidoImpulsivo` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`idActividad`),
  UNIQUE KEY `idActividad_UNIQUE` (`idActividad`),
  KEY `fk_Actividad_PuestoDeTrabajo1_idx` (`idPuestoDeTrabajo`),
  KEY `fk_Actividad_Sucursal1_idx` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividad`
--

LOCK TABLES `actividad` WRITE;
/*!40000 ALTER TABLE `actividad` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actividadEconomica`
--

DROP TABLE IF EXISTS `actividadEconomica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividadEconomica` (
  `idActividadEconomica` int(11) NOT NULL AUTO_INCREMENT,
  `nombreActividadE` varchar(100) NOT NULL,
  PRIMARY KEY (`idActividadEconomica`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividadEconomica`
--

LOCK TABLES `actividadEconomica` WRITE;
/*!40000 ALTER TABLE `actividadEconomica` DISABLE KEYS */;
INSERT INTO `actividadEconomica` VALUES (1,'MANUFACTURERA'),(2,'COMERCIAL'),(3,'MINERA'),(4,'ESCUELA');
/*!40000 ALTER TABLE `actividadEconomica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barrera`
--

DROP TABLE IF EXISTS `barrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `barrera` (
  `idBarrera` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `coordNorteInicio` float DEFAULT NULL,
  `coordEsteInicio` float DEFAULT NULL,
  `coordNorteFin` float DEFAULT NULL,
  `coordEsteFin` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `atenuacionPorDifraccion` float DEFAULT NULL,
  PRIMARY KEY (`idBarrera`),
  KEY `fk_Barrera_Fuente1_idx` (`idFuente`),
  CONSTRAINT `fk_Barrera_Fuente1` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`idFuente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrera`
--

LOCK TABLES `barrera` WRITE;
/*!40000 ALTER TABLE `barrera` DISABLE KEYS */;
INSERT INTO `barrera` VALUES (1,1,1,1,1,1,10,NULL),(2,1,2,2,2,2,2,100),(3,1,2,2,2,2,2,100);
/*!40000 ALTER TABLE `barrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bitacora` (
  `idBitacora` int(11) NOT NULL AUTO_INCREMENT,
  `idSucursal` int(11) NOT NULL,
  `tipoMovimiento` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `idUsuario` bigint(20) NOT NULL,
  PRIMARY KEY (`idBitacora`),
  UNIQUE KEY `idBitacora_UNIQUE` (`idBitacora`),
  KEY `fk_Bitacora_Sucursal1_idx` (`idSucursal`),
  KEY `fk_Bitacora_Usuarios1_idx` (`idUsuario`),
  CONSTRAINT `fk_Bitacora_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bitacora_Usuarios1` FOREIGN KEY (`idUsuario`) REFERENCES `Users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comprapuntos`
--

DROP TABLE IF EXISTS `comprapuntos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comprapuntos` (
  `idCompraPuntos` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `idTransaccion` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estatus` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `importe` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidadPuntos` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`idCompraPuntos`),
  UNIQUE KEY `idCompraPuntos_UNIQUE` (`idCompraPuntos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comprapuntos`
--

LOCK TABLES `comprapuntos` WRITE;
/*!40000 ALTER TABLE `comprapuntos` DISABLE KEYS */;
/*!40000 ALTER TABLE `comprapuntos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunas`
--

DROP TABLE IF EXISTS `comunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comunas` (
  `idComuna` int(11) NOT NULL AUTO_INCREMENT,
  `nombreComuna` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idComuna`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunas`
--

LOCK TABLES `comunas` WRITE;
/*!40000 ALTER TABLE `comunas` DISABLE KEYS */;
INSERT INTO `comunas` VALUES (1,'Algarrobo'),(2,'Alhué'),(3,'Alto Bío Bío'),(4,'Alto del Carmen'),(5,'Alto Hospicio'),(6,'Ancud'),(7,'Andacollo'),(8,'Angol'),(9,'Antártica'),(10,'Antofagasta'),(11,'Antuco'),(12,'Arauco'),(13,'Arica'),(14,'Aysén'),(15,'Buin'),(16,'Bulnes'),(17,'Cabildo'),(18,'Cabo de Hornos'),(19,'Cabrero'),(20,'Calama'),(21,'Calbuco'),(22,'Caldera'),(23,'Calera de Tango'),(24,'Calle Larga'),(25,'Camarones'),(26,'Camiña'),(27,'Canela'),(28,'Cañete'),(29,'Carahue'),(30,'Cartagena'),(31,'Casablanca'),(32,'Castro'),(33,'Catemu'),(34,'Cauquenes'),(35,'Cerrillos'),(36,'Cerro Navia'),(37,'Chaitén'),(38,'Chanco'),(39,'Chañaral'),(40,'Chépica'),(41,'Chiguayante'),(42,'Chile Chico'),(43,'Chillán'),(44,'Chillán Viejo'),(45,'Chimbarongo'),(46,'Chol Chol'),(47,'Chonchi'),(48,'Cisnes'),(49,'Cobquecura'),(50,'Cochamó'),(51,'Cochrane'),(52,'Cochrane'),(53,'Coelemu'),(54,'Coihueco'),(55,'Coinco'),(56,'Colbún'),(57,'Colchane'),(58,'Colina'),(59,'Collipulli'),(60,'Coltauco'),(61,'Combarbalá'),(62,'Concepción'),(63,'Conchalí'),(64,'Concón'),(65,'Constitución'),(66,'Contulmo'),(67,'Copiapó'),(68,'Coquimbo'),(69,'Coronel'),(70,'Corral'),(71,'Coyhaique'),(72,'Cunco'),(73,'Curacautín'),(74,'Curacaví'),(75,'Curaco de Vélez'),(76,'Curanilahue'),(77,'Curarrehue'),(78,'Curepto'),(79,'Curicó'),(80,'Dalcahue'),(81,'Diego de Almagro'),(82,'Doñihue'),(83,'El Bosque'),(84,'El Carmen'),(85,'El Monte'),(86,'El Quisco'),(87,'El Tabo'),(88,'Empedrado'),(89,'Ercilla'),(90,'Estación Central'),(91,'Florida'),(92,'Freire'),(93,'Freirina'),(94,'Fresia'),(95,'Frutillar'),(96,'Futaleufú'),(97,'Futrono'),(98,'Galvarino'),(99,'General Lagos'),(100,'Gorbea'),(101,'Graneros'),(102,'Guaitecas'),(103,'Hijuelas'),(104,'Hualaihué'),(105,'Hualañé'),(106,'Hualpén'),(107,'Hualqui'),(108,'Huara'),(109,'Huasco'),(110,'Huechuraba'),(111,'Illapel'),(112,'Independencia'),(113,'Iquique'),(114,'Isla de Maipo'),(115,'Isla de Pascua'),(116,'Juan Fernández'),(117,'La Calera'),(118,'La Cisterna'),(119,'La Cruz'),(120,'La Estrella'),(121,'La Florida'),(122,'La Granja'),(123,'La Higuera'),(124,'La Ligua'),(125,'La Pintana'),(126,'La Reina'),(127,'La Serena'),(128,'La Unión'),(129,'Lago Ranco'),(130,'Lago Verde'),(131,'Laguna Blanca'),(132,'Laja'),(133,'Lampa'),(134,'Lanco'),(135,'Las Cabras'),(136,'Las Condes'),(137,'Lautaro'),(138,'Lebu'),(139,'Licantén'),(140,'Limache'),(141,'Linares'),(142,'Litueche'),(143,'Llanquihue'),(144,'Llay Llay'),(145,'Lo Barnechea'),(146,'Lo Espejo'),(147,'Lo Prado'),(148,'Lolol'),(149,'Loncoche'),(150,'Longaví'),(151,'Lonquimay'),(152,'Los Álamos'),(153,'Los Andes'),(154,'Los Ángeles'),(155,'Los Lagos'),(156,'Los Muermos'),(157,'Los Sauces'),(158,'Los Vilos'),(159,'Lota'),(160,'Lumaco'),(161,'Machalí'),(162,'Macul'),(163,'Máfil'),(164,'Maipú'),(165,'Malloa'),(166,'Marchigüe'),(167,'María Elena'),(168,'María Pinto'),(169,'Mariquina'),(170,'Maule'),(171,'Maullín'),(172,'Mejillones'),(173,'Melipeuco'),(174,'Melipilla'),(175,'Molina'),(176,'Monte Patria'),(177,'Mostazal'),(178,'Mulchén'),(179,'Nacimiento'),(180,'Nancagua'),(181,'Navidad'),(182,'Negrete'),(183,'Ninhue'),(184,'Nogales'),(185,'Nueva Imperial'),(186,'Ñiquén'),(187,'Ñuñoa'),(188,'O’Higgins'),(189,'Olivar'),(190,'Ollagüe'),(191,'Olmué'),(192,'Osorno'),(193,'Ovalle'),(194,'Padre Hurtado'),(195,'Padre Las Casas'),(196,'Paihuano'),(197,'Paillaco'),(198,'Paine'),(199,'Palena'),(200,'Palmilla'),(201,'Panguipulli'),(202,'Panquehue'),(203,'Papudo'),(204,'Paredones'),(205,'Parral'),(206,'Pedro Aguirre Cerda'),(207,'Pelarco'),(208,'Pelluhue'),(209,'Pemuco'),(210,'Pencahue'),(211,'Penco'),(212,'Peñaflor'),(213,'Peñalolén'),(214,'Peralillo'),(215,'Perquenco'),(216,'Petorca'),(217,'Peumo'),(218,'Pica'),(219,'Pichidegua'),(220,'Pichilemu'),(221,'Pinto'),(222,'Pirque'),(223,'Pitrufquén'),(224,'Placilla'),(225,'Portezuelo'),(226,'Porvenir'),(227,'Pozo Almonte'),(228,'Primavera'),(229,'Providencia'),(230,'Puchuncaví'),(231,'Pucón'),(232,'Pudahuel'),(233,'Puente Alto'),(234,'Puerto Montt'),(235,'Puerto Natales'),(236,'Puerto Octay'),(237,'Puerto Varas'),(238,'Pumanque'),(239,'Punitaqui'),(240,'Punta Arenas'),(241,'Puqueldón'),(242,'Purén'),(243,'Purranque'),(244,'Putaendo'),(245,'Putre'),(246,'Puyehue'),(247,'Queilén'),(248,'Quellón'),(249,'Quemchi'),(250,'Quilaco'),(251,'Quilicura'),(252,'Quilleco'),(253,'Quillón'),(254,'Quillota'),(255,'Quilpué'),(256,'Quinchao'),(257,'Quinta de Tilcoco'),(258,'Quinta Normal'),(259,'Quintero'),(260,'Quirihue'),(261,'Rancagua'),(262,'Ránquil'),(263,'Rauco'),(264,'Recoleta'),(265,'Renaico'),(266,'Renca'),(267,'Rengo'),(268,'Requínoa'),(269,'Retiro'),(270,'Rinconada'),(271,'Río Bueno'),(272,'Río Claro'),(273,'Río Hurtado'),(274,'Río Ibáñez'),(275,'Río Negro'),(276,'Río Verde'),(277,'Romeral'),(278,'Saavedra'),(279,'Sagrada Familia'),(280,'Salamanca'),(281,'San Antonio'),(282,'San Bernardo'),(283,'San Carlos'),(284,'San Clemente'),(285,'San Esteban'),(286,'San Fabián'),(287,'San Felipe'),(288,'San Fernando'),(289,'San Gregorio'),(290,'San Ignacio'),(291,'San Javier'),(292,'San Joaquín'),(293,'San José de Maipo'),(294,'San Juan de la Costa'),(295,'San Miguel'),(296,'San Nicolás'),(297,'San Pablo'),(298,'San Pedro'),(299,'San Pedro de Atacama'),(300,'San Pedro de la Paz'),(301,'San Rafael'),(302,'San Ramón'),(303,'San Rosendo'),(304,'San Vicente de Tagua Tagua'),(305,'Santa Bárbara'),(306,'Santa Cruz'),(307,'Santa Juana'),(308,'Santa María'),(309,'Santiago'),(310,'Santo Domingo'),(311,'Sierra Gorda'),(312,'Talagante'),(313,'Talca'),(314,'Talcahuano'),(315,'Taltal'),(316,'Temuco'),(317,'Teno'),(318,'Teodoro Schmidt'),(319,'Tierra Amarilla'),(320,'Til Til'),(321,'Timaukel'),(322,'Tirúa'),(323,'Tocopilla'),(324,'Toltén'),(325,'Tomé'),(326,'Torres del Paine'),(327,'Tortel'),(328,'Traiguén'),(329,'Trehuaco'),(330,'Tucapel'),(331,'Valdivia'),(332,'Vallenar'),(333,'Valparaíso'),(334,'Vichuquén'),(335,'Victoria'),(336,'Vicuña'),(337,'Vilcún'),(338,'Villa Alegre'),(339,'Villa Alemana'),(340,'Villarrica'),(341,'Viña del Mar'),(342,'Vitacura'),(343,'Yerbas Buenas'),(344,'Yumbel'),(345,'Yungay'),(346,'Zapallar');
/*!40000 ALTER TABLE `comunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documento`
--

DROP TABLE IF EXISTS `documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documento` (
  `idDocumento` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `documentoPDF` blob,
  `documentoWord` blob,
  `documentoHTML` longtext,
  `tipo` varchar(45) DEFAULT NULL,
  `idTipoDocumento` int(11) NOT NULL,
  PRIMARY KEY (`idDocumento`),
  KEY `fk_Documento_Fuente1_idx` (`idFuente`),
  KEY `fk_Documento_TipoDocumento1_idx` (`idTipoDocumento`),
  CONSTRAINT `fk_Documento_Fuente1` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`idFuente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Documento_TipoDocumento1` FOREIGN KEY (`idTipoDocumento`) REFERENCES `tipoDocumento` (`idTipoDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documento`
--

LOCK TABLES `documento` WRITE;
/*!40000 ALTER TABLE `documento` DISABLE KEYS */;
/*!40000 ALTER TABLE `documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentoSeccion`
--

DROP TABLE IF EXISTS `documentoSeccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentoSeccion` (
  `idDocumentoSeccion` int(11) NOT NULL AUTO_INCREMENT,
  `idDocumento` int(11) NOT NULL,
  `html` longtext,
  `orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`idDocumentoSeccion`),
  KEY `fk_DocumentoSeccion_Documento1_idx` (`idDocumento`),
  CONSTRAINT `fk_DocumentoSeccion_Documento1` FOREIGN KEY (`idDocumento`) REFERENCES `documento` (`idDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentoSeccion`
--

LOCK TABLES `documentoSeccion` WRITE;
/*!40000 ALTER TABLE `documentoSeccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentoSeccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `idEmpresa` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `ruth` int(11) NOT NULL,
  `nAdherenteMutual` int(11) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `nombreRepresentanteLegal` varchar(100) NOT NULL,
  `nombrepersonaContacto` varchar(100) DEFAULT NULL,
  `generoPersonaContacto` enum('F','M','O') DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `idActividadE` int(11) NOT NULL,
  `descripcionActividadEmpresa` varchar(100) DEFAULT NULL,
  `idComuna` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEmpresa`),
  UNIQUE KEY `idEmpresa_UNIQUE` (`idEmpresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'EMPRESA DEMO S.A DE C.V',762405423,161462,'AV. GRAND VIA','CARLOS MARTINEZ','CARLOS MARTINEZ','M','00190049890','holla@empresademo.com',4,'En DEMO, hemos desarrollado una cartera en permanente crecimiento de productos de vanguardia, respal',0),(2,'EMPRESA RIO S.A. DE C.V.',762405403,161402,'AV. CENTRAL','MANUEL RODRIGUEZ','MANUEL RODRIGUEZ','M','00150094444','saluda@guporio.com',1,'En RIO, hemos desarrollado una cartera en permanente crecimiento de productos de vanguardia, respald',0);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etiqueta`
--

DROP TABLE IF EXISTS `etiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etiqueta` (
  `idEtiqueta` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  PRIMARY KEY (`idEtiqueta`),
  UNIQUE KEY `idEtiqueta_UNIQUE` (`idEtiqueta`),
  KEY `fk_Etiqueta_Sucursal1_idx` (`idSucursal`),
  CONSTRAINT `fk_Etiqueta_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiqueta`
--

LOCK TABLES `etiqueta` WRITE;
/*!40000 ALTER TABLE `etiqueta` DISABLE KEYS */;
/*!40000 ALTER TABLE `etiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formula`
--

DROP TABLE IF EXISTS `formula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formula` (
  `idFormula` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `formula` varchar(45) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFormula`),
  KEY `fk_Formula_Fuente1_idx` (`idFuente`),
  CONSTRAINT `fk_Formula_Fuente1` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`idFuente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formula`
--

LOCK TABLES `formula` WRITE;
/*!40000 ALTER TABLE `formula` DISABLE KEYS */;
/*!40000 ALTER TABLE `formula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuente`
--

DROP TABLE IF EXISTS `fuente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fuente` (
  `idFuente` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `idSucursal` int(11) DEFAULT NULL,
  `coordNorte` float DEFAULT NULL,
  `coordEste` float DEFAULT NULL,
  `lugar` varchar(45) DEFAULT NULL,
  `nps` int(11) DEFAULT NULL,
  `distanciaInicial` int(11) DEFAULT NULL,
  `limiteCircunferencia` int(11) DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `potenciaAcustica` decimal(4,1) DEFAULT NULL,
  PRIMARY KEY (`idFuente`),
  KEY `fk_Fuente_usuario_idx` (`idUsuario`),
  KEY `fk_sucursal_idx` (`idSucursal`),
  CONSTRAINT `fk_Fuente_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_sucursal` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuente`
--

LOCK TABLES `fuente` WRITE;
/*!40000 ALTER TABLE `fuente` DISABLE KEYS */;
INSERT INTO `fuente` VALUES (1,1,NULL,10.2993,19.9992,'norte',21,30,20,10,NULL);
/*!40000 ALTER TABLE `fuente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuentesMaquinas`
--

DROP TABLE IF EXISTS `fuentesMaquinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fuentesMaquinas` (
  `idFuentesMaquinas` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) DEFAULT NULL,
  `idMaquina` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFuentesMaquinas`),
  KEY `fk_fuente_idx` (`idFuente`),
  KEY `fk_maquina_idx` (`idMaquina`),
  CONSTRAINT `fk_fuente` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`idFuente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_maquina` FOREIGN KEY (`idMaquina`) REFERENCES `maquina` (`idMaquina`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuentesMaquinas`
--

LOCK TABLES `fuentesMaquinas` WRITE;
/*!40000 ALTER TABLE `fuentesMaquinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `fuentesMaquinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ges`
--

DROP TABLE IF EXISTS `ges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ges` (
  `idGes` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `idSolucion` int(11) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `dosisPorJornada` varchar(45) DEFAULT NULL,
  `idNivelExposicion` int(11) DEFAULT NULL,
  `numeroTrabajadores` int(11) DEFAULT NULL,
  `trabajadoresConEPA` int(11) DEFAULT NULL,
  `evaluacion` enum('sobre CA','bajo CA') DEFAULT NULL,
  `respectoPVSA` enum('ingresa PVSA','continua PVSA') DEFAULT NULL,
  PRIMARY KEY (`idGes`),
  UNIQUE KEY `idGrupo_UNIQUE` (`idGes`),
  KEY `fk_Grupo_Solucion1_idx` (`idSolucion`),
  KEY `fk_Grupo_Sucursal1_idx` (`idSucursal`),
  CONSTRAINT `fk_Grupo_Solucion1` FOREIGN KEY (`idSolucion`) REFERENCES `solucion` (`idSolucion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grupo_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ges`
--

LOCK TABLES `ges` WRITE;
/*!40000 ALTER TABLE `ges` DISABLE KEYS */;
/*!40000 ALTER TABLE `ges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios`
--

DROP TABLE IF EXISTS `horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horarios` (
  `idHorarios` int(11) NOT NULL AUTO_INCREMENT,
  `LunesAViernes` tinyint(1) DEFAULT NULL,
  `horaInicioLV` time DEFAULT NULL,
  `horaTerminoLV` time DEFAULT NULL,
  `horaDeColacionLV` int(11) DEFAULT NULL,
  `Sabados` tinyint(1) DEFAULT NULL,
  `horaInicioS` time DEFAULT NULL,
  `horaTermino` time DEFAULT NULL,
  `idGes` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHorarios`),
  KEY `fk_ges` (`idGes`),
  CONSTRAINT `fk_ges` FOREIGN KEY (`idGes`) REFERENCES `ges` (`idGes`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios`
--

LOCK TABLES `horarios` WRITE;
/*!40000 ALTER TABLE `horarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagen` (
  `idImagen` int(11) NOT NULL AUTO_INCREMENT,
  `tipoImagen` enum('FOTO','LAYOUT') DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `idRecinto` int(11) DEFAULT NULL,
  `idMaquina` int(11) DEFAULT NULL,
  PRIMARY KEY (`idImagen`),
  UNIQUE KEY `idImagen_UNIQUE` (`idImagen`),
  KEY `fk_Imagen_Sucursal1_idx` (`idSucursal`),
  KEY `fk_Imagen_Recinto1_idx` (`idRecinto`),
  KEY `fk_Imagen_Maquina1_idx` (`idMaquina`),
  CONSTRAINT `fk_Imagen_Maquina1` FOREIGN KEY (`idMaquina`) REFERENCES `maquina` (`idMaquina`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Imagen_Recinto1` FOREIGN KEY (`idRecinto`) REFERENCES `recinto` (`idRecinto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Imagen_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen1`
--

DROP TABLE IF EXISTS `imagen1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagen1` (
  `idImagen` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `idReceptor` int(11) NOT NULL,
  `imagen` blob,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `fk_Imagen_Fuente1_idx` (`idFuente`),
  KEY `fk_Imagen_Receptor1_idx` (`idReceptor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen1`
--

LOCK TABLES `imagen1` WRITE;
/*!40000 ALTER TABLE `imagen1` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenHasEtiqueta`
--

DROP TABLE IF EXISTS `imagenHasEtiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagenHasEtiqueta` (
  `idImagenHasEtiqueta` int(11) NOT NULL AUTO_INCREMENT,
  `idImagen` int(11) NOT NULL,
  `idEtiqueta` int(11) NOT NULL,
  PRIMARY KEY (`idImagenHasEtiqueta`),
  KEY `fk_Imagen_has_Etiqueta_Etiqueta1_idx` (`idEtiqueta`),
  KEY `fk_Imagen_has_Etiqueta_Imagen1_idx` (`idImagen`),
  CONSTRAINT `fk_Imagen_has_Etiqueta_Etiqueta1` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiqueta` (`idEtiqueta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Imagen_has_Etiqueta_Imagen1` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenHasEtiqueta`
--

LOCK TABLES `imagenHasEtiqueta` WRITE;
/*!40000 ALTER TABLE `imagenHasEtiqueta` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenHasEtiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenProyecto`
--

DROP TABLE IF EXISTS `imagenProyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagenProyecto` (
  `idImagenProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `idImagen` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL,
  PRIMARY KEY (`idImagenProyecto`),
  KEY `idForaneoProyectos_idx` (`idProyecto`),
  KEY `idForaneoImagen_idx` (`idImagen`),
  CONSTRAINT `idForaneoImagen` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`),
  CONSTRAINT `idForaneoImagen1` FOREIGN KEY (`idImagen`) REFERENCES `imagen1` (`idImagen`),
  CONSTRAINT `idForaneoProyecto` FOREIGN KEY (`idProyecto`) REFERENCES `proyectos` (`idproyectos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenProyecto`
--

LOCK TABLES `imagenProyecto` WRITE;
/*!40000 ALTER TABLE `imagenProyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenProyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informePrexor`
--

DROP TABLE IF EXISTS `informePrexor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `informePrexor` (
  `idInformePrexor` int(11) NOT NULL AUTO_INCREMENT,
  `numeroInforme` int(11) NOT NULL,
  `nMatrizRuido` int(11) DEFAULT NULL,
  `fechaEmision` timestamp NULL DEFAULT NULL,
  `profesionalTerreno` varchar(100) DEFAULT NULL,
  `generoProfesionalTerreno` enum('F','M','O') DEFAULT NULL,
  `profesionalInforme` varchar(100) DEFAULT NULL,
  `generoProfesionalInforme` enum('F','M','O') DEFAULT NULL,
  `cargoProfesionalInforme` varchar(45) DEFAULT NULL,
  `nombreSolicitante` varchar(100) DEFAULT NULL,
  `generoSolicitante` enum('F','M','O') DEFAULT NULL,
  `cargoSolicitante` varchar(45) DEFAULT NULL,
  `nombreAutorizante` varchar(100) DEFAULT NULL,
  `generoAutorizante` enum('F','M','O') DEFAULT NULL,
  `nTrabajadoresExpuestos` int(11) DEFAULT NULL,
  `nTrabajadoresEXPMuyBaja` int(11) DEFAULT NULL,
  `nTrabajadoresEXPBaja` int(11) DEFAULT NULL,
  `nTrabajadoresEXPMedia` int(11) DEFAULT NULL,
  `nTrabajadoresEXPAlta` int(11) DEFAULT NULL,
  `nTrabajadoresEXPMuyAlta` int(11) DEFAULT NULL,
  `nTrabajadoresEXPRuidoImp` int(11) DEFAULT NULL,
  `umbralNpsMaqCriticas` decimal(4,1) DEFAULT NULL,
  PRIMARY KEY (`idInformePrexor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informePrexor`
--

LOCK TABLES `informePrexor` WRITE;
/*!40000 ALTER TABLE `informePrexor` DISABLE KEYS */;
INSERT INTO `informePrexor` VALUES (1,234277,NULL,'2020-08-26 15:17:38','DANIEL ZAMORANO','M',NULL,NULL,NULL,'MIGUEL GUERRA','M','ADMINISTRADOR','MIGUEL GUERRA','M',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `informePrexor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquina`
--

DROP TABLE IF EXISTS `maquina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maquina` (
  `idMaquina` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `nps` decimal(4,1) DEFAULT NULL,
  `distanciaInicial` float DEFAULT NULL,
  `coordenadaNorte` float DEFAULT NULL,
  `coordenadaEste` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `potenciaAcustica` decimal(4,1) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  PRIMARY KEY (`idMaquina`),
  UNIQUE KEY `idMaquina_UNIQUE` (`idMaquina`),
  KEY `fk_Maquina_Sucursal1_idx` (`idSucursal`),
  CONSTRAINT `fk_Maquina_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquina`
--

LOCK TABLES `maquina` WRITE;
/*!40000 ALTER TABLE `maquina` DISABLE KEYS */;
/*!40000 ALTER TABLE `maquina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquinaPorPuestoDeTrabajo`
--

DROP TABLE IF EXISTS `maquinaPorPuestoDeTrabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maquinaPorPuestoDeTrabajo` (
  `idMaquinaPorPuestoDeTrabajo` int(11) NOT NULL AUTO_INCREMENT,
  `idMaquina` int(11) DEFAULT NULL,
  `idPuestoDeTrabajo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMaquinaPorPuestoDeTrabajo`),
  KEY `fk_Maquina_has_PuestoDeTrabajo_PuestoDeTrabajo1_idx` (`idPuestoDeTrabajo`),
  KEY `fk_Maquina_has_PuestoDeTrabajo_Maquina1_idx` (`idMaquina`),
  CONSTRAINT `fk_Maquina_has_PuestoDeTrabajo_Maquina1` FOREIGN KEY (`idMaquina`) REFERENCES `maquina` (`idMaquina`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Maquina_has_PuestoDeTrabajo_PuestoDeTrabajo1` FOREIGN KEY (`idPuestoDeTrabajo`) REFERENCES `puestoDeTrabajo` (`idPuestoDeTrabajo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquinaPorPuestoDeTrabajo`
--

LOCK TABLES `maquinaPorPuestoDeTrabajo` WRITE;
/*!40000 ALTER TABLE `maquinaPorPuestoDeTrabajo` DISABLE KEYS */;
/*!40000 ALTER TABLE `maquinaPorPuestoDeTrabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquinasDeRuidoPrincipales`
--

DROP TABLE IF EXISTS `maquinasDeRuidoPrincipales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maquinasDeRuidoPrincipales` (
  `idMaquinasDeRuidoPrincipales` int(11) NOT NULL AUTO_INCREMENT,
  `nombreMaquina` varchar(45) DEFAULT NULL,
  `nps` decimal(4,1) DEFAULT NULL,
  `nAfectados` int(11) DEFAULT NULL,
  `causas` varchar(100) DEFAULT NULL,
  `idMaquina` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMaquinasDeRuidoPrincipales`),
  KEY `fk_maquinasRuido_idx` (`idMaquina`),
  CONSTRAINT `fk_maquinasRuido` FOREIGN KEY (`idMaquina`) REFERENCES `maquina` (`idMaquina`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquinasDeRuidoPrincipales`
--

LOCK TABLES `maquinasDeRuidoPrincipales` WRITE;
/*!40000 ALTER TABLE `maquinasDeRuidoPrincipales` DISABLE KEYS */;
/*!40000 ALTER TABLE `maquinasDeRuidoPrincipales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcasProtectoresAuditivos`
--

DROP TABLE IF EXISTS `marcasProtectoresAuditivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcasProtectoresAuditivos` (
  `idMarcaProtectorAuditivo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreMarcaPA` varchar(45) DEFAULT NULL,
  `nombreModeloPA` varchar(45) DEFAULT NULL,
  `nombreTipoPA` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMarcaProtectorAuditivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcasProtectoresAuditivos`
--

LOCK TABLES `marcasProtectoresAuditivos` WRITE;
/*!40000 ALTER TABLE `marcasProtectoresAuditivos` DISABLE KEYS */;
/*!40000 ALTER TABLE `marcasProtectoresAuditivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicionDeRuidoFuenteEmisora`
--

DROP TABLE IF EXISTS `medicionDeRuidoFuenteEmisora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicionDeRuidoFuenteEmisora` (
  `idMedicionDeRuidoFuenteEmisora` int(11) NOT NULL AUTO_INCREMENT,
  `idReceptor` int(11) DEFAULT NULL,
  `tipoMedicion` enum('INTERNA','EXTERNA') DEFAULT NULL,
  `ventana` enum('ABIERTA','CERRADA') DEFAULT NULL,
  `modelacionIso9613` enum('SI','NO') DEFAULT NULL,
  `punto` enum('1','2','3') DEFAULT NULL,
  `npsEq1` decimal(4,1) DEFAULT '0.0',
  `npsEq2` decimal(4,1) DEFAULT '0.0',
  `npsEq3` decimal(4,1) DEFAULT '0.0',
  `npsMin1` decimal(4,1) DEFAULT '0.0',
  `npsMin2` decimal(4,1) DEFAULT '0.0',
  `npsMin3` decimal(4,1) DEFAULT '0.0',
  `npsMaxF1` decimal(4,1) DEFAULT '0.0',
  `npsMaxF2` decimal(4,1) DEFAULT '0.0',
  `npsMaxF3` decimal(4,1) DEFAULT '0.0',
  `npsMax-5F1` decimal(4,1) DEFAULT NULL,
  `npsMax-5F2` decimal(4,1) DEFAULT NULL,
  `npsMax-5F3` decimal(4,1) DEFAULT NULL,
  `mayorF1` decimal(4,1) DEFAULT NULL,
  `mayorF2` decimal(4,1) DEFAULT NULL,
  `mayorF3` decimal(4,1) DEFAULT NULL,
  `promedio` decimal(4,1) DEFAULT NULL,
  `suma` decimal(4,1) DEFAULT NULL,
  `correccion` decimal(4,1) DEFAULT NULL,
  `correcionRuidoF` decimal(4,1) DEFAULT '0.0',
  `correcionVentana` decimal(4,1) DEFAULT '0.0',
  `diferencia` decimal(4,1) DEFAULT NULL,
  `ruidoFondoSuma` decimal(4,1) DEFAULT NULL,
  `ruidoFondoCorregido` decimal(4,1) DEFAULT NULL,
  PRIMARY KEY (`idMedicionDeRuidoFuenteEmisora`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicionDeRuidoFuenteEmisora`
--

LOCK TABLES `medicionDeRuidoFuenteEmisora` WRITE;
/*!40000 ALTER TABLE `medicionDeRuidoFuenteEmisora` DISABLE KEYS */;
INSERT INTO `medicionDeRuidoFuenteEmisora` VALUES (1,1,'INTERNA','CERRADA','NO','1',33.5,29.0,35.5,23.3,22.7,23.5,52.2,32.8,48.4,47.2,27.7,43.4,47.2,29.0,43.4,40.0,40.0,NULL,-2.0,10.0,5.0,45.0,45.0),(2,1,'EXTERNA','CERRADA','SI','1',33.5,29.0,35.5,23.3,22.7,23.5,52.2,32.8,48.4,47.2,27.7,43.4,47.2,29.0,43.4,40.0,40.0,NULL,-2.0,10.0,5.0,45.0,45.0);
/*!40000 ALTER TABLE `medicionDeRuidoFuenteEmisora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multimedia`
--

DROP TABLE IF EXISTS `multimedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multimedia` (
  `idMultimedia` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMultimedia`),
  UNIQUE KEY `idMultimedia_UNIQUE` (`idMultimedia`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multimedia`
--

LOCK TABLES `multimedia` WRITE;
/*!40000 ALTER TABLE `multimedia` DISABLE KEYS */;
INSERT INTO `multimedia` VALUES (1,'Documento','/temp/Dosis/doc1.docx'),(2,'informeNivelesRuido','temp/ficha/FNR1_5f4744799facc.docx'),(3,'dosisRuido','temp/dosis/CDR_1_5f474585af8b5.docx'),(4,'dosisRuido','temp/dosis/CDR_1_5f4746066f291.docx'),(5,'dosisRuido','temp/dosis/CDR_1_5f47462b27668.docx'),(6,'dosisRuido','temp/dosis/CDR_1_5f474658a8b83.docx'),(7,'dosisRuido','temp/dosis/CDR_1_5f48a2d9e8564.docx'),(8,'informeNivelesRuido','temp/ficha/FNR1_5f4929b3dbc57.docx'),(9,'informeNivelesRuido','temp/ficha/FNR1_5f49323dcf9f9.docx'),(10,'informeNivelesRuido','temp/ficha/FNR1_5f4960734ad2b.docx'),(11,'informeNivelesRuido','temp/ficha/FNR1_5f49869f238ce.docx'),(12,'informeNivelesRuido','temp/ficha/FNR1_5f498da04d814.docx'),(13,'informeNivelesRuido','temp/ficha/FNR1_5f4a8fb9ae598.docx'),(14,'informeNivelesRuido','temp/ficha/FNR1_5f4a9154d0d2c.docx');
/*!40000 ALTER TABLE `multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multimediaHasEtiqueta`
--

DROP TABLE IF EXISTS `multimediaHasEtiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multimediaHasEtiqueta` (
  `idMultimediaHasEtiqueta` int(11) NOT NULL AUTO_INCREMENT,
  `idMultimedia` int(11) NOT NULL,
  `idEtiqueta` int(11) NOT NULL,
  PRIMARY KEY (`idMultimediaHasEtiqueta`),
  KEY `idFMultimedia_idx` (`idMultimedia`),
  KEY `idFEtiqueta_idx` (`idEtiqueta`),
  CONSTRAINT `idFEtiqueta` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiqueta` (`idEtiqueta`),
  CONSTRAINT `idFMultimedia` FOREIGN KEY (`idMultimedia`) REFERENCES `multimedia` (`idMultimedia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multimediaHasEtiqueta`
--

LOCK TABLES `multimediaHasEtiqueta` WRITE;
/*!40000 ALTER TABLE `multimediaHasEtiqueta` DISABLE KEYS */;
/*!40000 ALTER TABLE `multimediaHasEtiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `multimediaHasTipoDeUsuario`
--

DROP TABLE IF EXISTS `multimediaHasTipoDeUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `multimediaHasTipoDeUsuario` (
  `idMultimediaHasTipoDeUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `idMultimedia` int(11) DEFAULT NULL,
  `idTipoDeUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMultimediaHasTipoDeUsuario`),
  KEY `fk_Multimedia_has_TipoDeUsuario_TipoDeUsuario1_idx` (`idTipoDeUsuario`),
  KEY `fk_Multimedia_has_TipoDeUsuario_Multimedia1_idx` (`idMultimedia`),
  CONSTRAINT `fk_Multimedia_has_TipoDeUsuario_Multimedia1` FOREIGN KEY (`idMultimedia`) REFERENCES `multimedia` (`idMultimedia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Multimedia_has_TipoDeUsuario_TipoDeUsuario1` FOREIGN KEY (`idTipoDeUsuario`) REFERENCES `tipoDeUsuario` (`idTipoDeUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `multimediaHasTipoDeUsuario`
--

LOCK TABLES `multimediaHasTipoDeUsuario` WRITE;
/*!40000 ALTER TABLE `multimediaHasTipoDeUsuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `multimediaHasTipoDeUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil` (
  `idPerfil` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPerfil`),
  UNIQUE KEY `idPerfil_UNIQUE` (`idPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfilHasTipoDeUsuario`
--

DROP TABLE IF EXISTS `perfilHasTipoDeUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfilHasTipoDeUsuario` (
  `idPerfilHasTipoDeUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `idPerfil` int(11) DEFAULT NULL,
  `idTipoDeUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPerfilHasTipoDeUsuario`),
  KEY `fk_Perfil_has_TipoDeUsuario_TipoDeUsuario1_idx` (`idTipoDeUsuario`),
  KEY `fk_Perfil_has_TipoDeUsuario_Perfil1_idx` (`idPerfil`),
  CONSTRAINT `fk_Perfil_has_TipoDeUsuario_Perfil1` FOREIGN KEY (`idPerfil`) REFERENCES `perfil` (`idPerfil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Perfil_has_TipoDeUsuario_TipoDeUsuario1` FOREIGN KEY (`idTipoDeUsuario`) REFERENCES `tipoDeUsuario` (`idTipoDeUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfilHasTipoDeUsuario`
--

LOCK TABLES `perfilHasTipoDeUsuario` WRITE;
/*!40000 ALTER TABLE `perfilHasTipoDeUsuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfilHasTipoDeUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plazosYClasificacionNivelesDePosicion`
--

DROP TABLE IF EXISTS `plazosYClasificacionNivelesDePosicion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plazosYClasificacionNivelesDePosicion` (
  `idPlazosYClasificacionNiveles` int(11) NOT NULL AUTO_INCREMENT,
  `exposicion` varchar(45) DEFAULT NULL,
  `limiteSuperior` varchar(45) DEFAULT NULL,
  `limiteInferior` varchar(45) DEFAULT NULL,
  `plazos` varchar(45) DEFAULT NULL,
  `ingresa` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idPlazosYClasificacionNiveles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plazosYClasificacionNivelesDePosicion`
--

LOCK TABLES `plazosYClasificacionNivelesDePosicion` WRITE;
/*!40000 ALTER TABLE `plazosYClasificacionNivelesDePosicion` DISABLE KEYS */;
/*!40000 ALTER TABLE `plazosYClasificacionNivelesDePosicion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procesosCriticos`
--

DROP TABLE IF EXISTS `procesosCriticos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `procesosCriticos` (
  `idProcesosCriticos` int(11) NOT NULL AUTO_INCREMENT,
  `nombreProceso` varchar(45) DEFAULT NULL,
  `nombreMaquina` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProcesosCriticos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procesosCriticos`
--

LOCK TABLES `procesosCriticos` WRITE;
/*!40000 ALTER TABLE `procesosCriticos` DISABLE KEYS */;
/*!40000 ALTER TABLE `procesosCriticos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promesas`
--

DROP TABLE IF EXISTS `promesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promesas` (
  `idPromesa` int(11) NOT NULL AUTO_INCREMENT,
  `idProyecto` int(11) DEFAULT NULL,
  `idRequerimiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPromesa`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promesas`
--

LOCK TABLES `promesas` WRITE;
/*!40000 ALTER TABLE `promesas` DISABLE KEYS */;
INSERT INTO `promesas` VALUES (1,7,100);
/*!40000 ALTER TABLE `promesas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protectorAuditivo`
--

DROP TABLE IF EXISTS `protectorAuditivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `protectorAuditivo` (
  `idProtectorAuditivo` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `certificacion` varchar(45) DEFAULT NULL,
  `certificacionISP` enum('SI','NO') DEFAULT NULL,
  `idTrabajador` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProtectorAuditivo`),
  KEY `fk_trabajador_idx` (`idTrabajador`),
  CONSTRAINT `fk_trabajador` FOREIGN KEY (`idTrabajador`) REFERENCES `trabajador` (`idTrabajador`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protectorAuditivo`
--

LOCK TABLES `protectorAuditivo` WRITE;
/*!40000 ALTER TABLE `protectorAuditivo` DISABLE KEYS */;
INSERT INTO `protectorAuditivo` VALUES (1,'EAR','C73','SPUMA','EN352-2',NULL,NULL),(2,'EAR','C73','SPUMA','EN352-2',NULL,NULL);
/*!40000 ALTER TABLE `protectorAuditivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectoMultimedia`
--

DROP TABLE IF EXISTS `proyectoMultimedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectoMultimedia` (
  `idProyectoMultimedia` int(11) NOT NULL AUTO_INCREMENT,
  `idProyecto` int(11) DEFAULT NULL,
  `idMultimedia` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProyectoMultimedia`),
  KEY `idForaneoProyectos_idx` (`idProyecto`),
  KEY `idForaneoMultimedia_idx` (`idMultimedia`),
  CONSTRAINT `idForaneoMultimedia` FOREIGN KEY (`idMultimedia`) REFERENCES `multimedia` (`idMultimedia`),
  CONSTRAINT `idForaneoProyectos` FOREIGN KEY (`idProyecto`) REFERENCES `proyectos` (`idproyectos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectoMultimedia`
--

LOCK TABLES `proyectoMultimedia` WRITE;
/*!40000 ALTER TABLE `proyectoMultimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectoMultimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `idproyectos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipoProyecto` enum('PREXOR','DS38') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idUsers` bigint(20) NOT NULL,
  PRIMARY KEY (`idproyectos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puestoDeTrabajo`
--

DROP TABLE IF EXISTS `puestoDeTrabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puestoDeTrabajo` (
  `idPuestoDeTrabajo` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `idRecinto` int(11) DEFAULT NULL,
  `dosis` decimal(5,2) DEFAULT NULL,
  `idProtectorAuditivoInicial` int(11) NOT NULL,
  `idProtectorAuditivoFinal` int(11) NOT NULL,
  `npsPromedio` decimal(5,2) DEFAULT NULL,
  `tiempoDeExposicion` decimal(20,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`idPuestoDeTrabajo`),
  UNIQUE KEY `idPuestoDeTrabajo_UNIQUE` (`idPuestoDeTrabajo`),
  KEY `fk_PuestoDeTrabajo_Recinto1_idx` (`idRecinto`),
  KEY `fk_PuestoDeTrabajo_Sucursal1_idx` (`idSucursal`),
  KEY `fk_PuestoDeTrabajo_ProtectorAuditivo1_idx` (`idProtectorAuditivoInicial`),
  KEY `fk_PuestoDeTrabajo_ProtectorAuditivo2_idx` (`idProtectorAuditivoFinal`),
  CONSTRAINT `fk_PuestoDeTrabajo_ProtectorAuditivo1` FOREIGN KEY (`idProtectorAuditivoInicial`) REFERENCES `protectorAuditivo` (`idProtectorAuditivo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PuestoDeTrabajo_ProtectorAuditivo2` FOREIGN KEY (`idProtectorAuditivoFinal`) REFERENCES `protectorAuditivo` (`idProtectorAuditivo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PuestoDeTrabajo_Recinto1` FOREIGN KEY (`idRecinto`) REFERENCES `recinto` (`idRecinto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PuestoDeTrabajo_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestoDeTrabajo`
--

LOCK TABLES `puestoDeTrabajo` WRITE;
/*!40000 ALTER TABLE `puestoDeTrabajo` DISABLE KEYS */;
INSERT INTO `puestoDeTrabajo` VALUES (2,'puesto1','ensamblador',1,1,504.00,1,1,8.00,1.00),(3,'puesto1','ensamblador',1,1,999.00,1,1,4.00,1.00),(4,'puesto1','ensamblador',1,1,50.00,1,1,8.00,2.00),(5,'puesto1','ensamblador',1,1,100.00,1,1,5.00,1.00),(6,'puesto1','ensamblador',1,1,230.00,1,1,8.00,1.00),(7,'puesto1','ensamblador',1,1,890.00,1,1,7.00,1.00),(8,'puesto1','ensamblador',1,1,780.00,1,1,3.33,1.00),(9,'puesto1','ensamblador',1,1,500.00,1,1,8.00,1.00),(10,'puesto1','ensamblador',1,1,600.00,1,1,8.00,1.00),(11,'puesto1','ensamblador',1,1,650.00,1,1,8.00,1.00),(12,'puesto1','ensamblador',1,1,700.00,1,1,8.00,1.00),(13,'puesto1','ensamblador',1,1,800.00,1,1,8.00,1.00),(14,'puesto1','ensamblador',1,1,90.00,1,1,8.00,1.00),(15,'puesto1','ensamblador',1,1,120.00,1,1,8.00,1.00),(16,'puesto1','ensamblador',1,1,234.00,1,1,8.00,1.00),(17,'puesto1','ensamblador',1,1,234.00,1,1,8.00,1.00);
/*!40000 ALTER TABLE `puestoDeTrabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntoInterseccionBarrera`
--

DROP TABLE IF EXISTS `puntoInterseccionBarrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puntoInterseccionBarrera` (
  `idPuntoInterseccionBarrera` int(11) NOT NULL AUTO_INCREMENT,
  `idBarrera` int(11) NOT NULL,
  `idReceptor` int(11) NOT NULL,
  `coordNorte` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coordEste` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idPuntoInterseccionBarrera`),
  KEY `fk_PuntoInterseccionBarrera_Barrera1_idx` (`idBarrera`),
  KEY `fk_PuntoInterseccionBarrera_Receptor1_idx` (`idReceptor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntoInterseccionBarrera`
--

LOCK TABLES `puntoInterseccionBarrera` WRITE;
/*!40000 ALTER TABLE `puntoInterseccionBarrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntoInterseccionBarrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntos`
--

DROP TABLE IF EXISTS `puntos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puntos` (
  `idPuntos` int(11) NOT NULL AUTO_INCREMENT,
  `saldo` varchar(45) DEFAULT NULL,
  `idUsuario` bigint(20) NOT NULL,
  PRIMARY KEY (`idPuntos`),
  UNIQUE KEY `idPuntos_UNIQUE` (`idPuntos`),
  KEY `fk_Puntos_Usuarios1_idx` (`idUsuario`),
  CONSTRAINT `fk_Puntos_Usuarios1` FOREIGN KEY (`idUsuario`) REFERENCES `Users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntos`
--

LOCK TABLES `puntos` WRITE;
/*!40000 ALTER TABLE `puntos` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receptor`
--

DROP TABLE IF EXISTS `receptor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receptor` (
  `idReceptor` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `numeroReceptor` varchar(45) DEFAULT NULL,
  `calle` varchar(45) DEFAULT NULL,
  `numero` varchar(45) DEFAULT NULL,
  `comuna` varchar(45) DEFAULT NULL,
  `datum` varchar(45) DEFAULT NULL,
  `huso` varchar(45) DEFAULT NULL,
  `coordNorte` float DEFAULT NULL,
  `coordEste` float DEFAULT NULL,
  `zonaEmplazamiento` varchar(45) DEFAULT NULL,
  `noCertificado` varchar(45) DEFAULT NULL,
  `zonidificacion` enum('I','II','III','IV','Rural') DEFAULT NULL,
  `distanciaFuente` float DEFAULT NULL,
  `distanciaCircunferencia` float DEFAULT NULL,
  `dBA` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  PRIMARY KEY (`idReceptor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receptor`
--

LOCK TABLES `receptor` WRITE;
/*!40000 ALTER TABLE `receptor` DISABLE KEYS */;
INSERT INTO `receptor` VALUES (1,1,'Escuela','1001','Teotihuacan','81','PARRA','WGS84','19',54.96,24.58,'ZONA EMPLAZA','0','III',500,100,60,10),(2,1,'Escuela','1001','Teotihuacan','81','PARRA','WGS84','19',54.96,24.58,'ZONA EMPLAZA','0','III',500,100,60,10),(3,1,'Escuela','1001','Teotihuacan','81','PARRA','WGS84','19',54.96,24.58,'ZONA EMPLAZA','0','III',500,100,60,10);
/*!40000 ALTER TABLE `receptor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recinto`
--

DROP TABLE IF EXISTS `recinto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recinto` (
  `idRecinto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `largo` varchar(45) DEFAULT NULL,
  `ancho` varchar(45) DEFAULT NULL,
  `alto` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) DEFAULT NULL,
  `idRecintoPadre` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRecinto`),
  UNIQUE KEY `idRecinto_UNIQUE` (`idRecinto`),
  KEY `fk_Recinto_Sucursal1_idx` (`idSucursal`),
  KEY `fk_Recinto_Recinto1_idx` (`idRecintoPadre`),
  CONSTRAINT `fk_Recinto_Recinto1` FOREIGN KEY (`idRecintoPadre`) REFERENCES `recinto` (`idRecinto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recinto_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recinto`
--

LOCK TABLES `recinto` WRITE;
/*!40000 ALTER TABLE `recinto` DISABLE KEYS */;
INSERT INTO `recinto` VALUES (1,'RECINTO 1','300','400','6',1,1);
/*!40000 ALTER TABLE `recinto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruidoDeFondo`
--

DROP TABLE IF EXISTS `ruidoDeFondo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruidoDeFondo` (
  `idRuidoDeFondo` int(11) NOT NULL AUTO_INCREMENT,
  `ruidoFondo` enum('SI','NO','NULL') DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `npsEq5Min` decimal(10,0) DEFAULT NULL,
  `npsEq10Min` decimal(10,0) DEFAULT NULL,
  `npsEq15Min` decimal(10,0) DEFAULT NULL,
  `npsEq20Min` decimal(10,0) DEFAULT NULL,
  `npsEq25Min` decimal(10,0) DEFAULT NULL,
  `npsEq30Min` decimal(10,0) DEFAULT NULL,
  `npsFinal` decimal(4,1) DEFAULT NULL,
  `observaciones` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idRuidoDeFondo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruidoDeFondo`
--

LOCK TABLES `ruidoDeFondo` WRITE;
/*!40000 ALTER TABLE `ruidoDeFondo` DISABLE KEYS */;
INSERT INTO `ruidoDeFondo` VALUES (1,'SI','2020-08-26','18:30:43',35,35,35,30,0,0,NULL,'Ruido de la fuente corresponde a equipos de refrigeración de galpones de almacenamiento');
/*!40000 ALTER TABLE `ruidoDeFondo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solucion`
--

DROP TABLE IF EXISTS `solucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solucion` (
  `idSolucion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  PRIMARY KEY (`idSolucion`),
  UNIQUE KEY `idSolucion_UNIQUE` (`idSolucion`),
  KEY `fk_Solucion_Sucursal1_idx` (`idSucursal`),
  CONSTRAINT `fk_Solucion_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solucion`
--

LOCK TABLES `solucion` WRITE;
/*!40000 ALTER TABLE `solucion` DISABLE KEYS */;
/*!40000 ALTER TABLE `solucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursal`
--

DROP TABLE IF EXISTS `sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursal` (
  `idSucursal` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSucursal` varchar(100) DEFAULT NULL,
  `direccionSucursal` varchar(100) DEFAULT '`db_ruidocx`.`empresa` `nombre`',
  `idProyecto` int(11) DEFAULT NULL,
  `idEmpresa` int(11) NOT NULL,
  PRIMARY KEY (`idSucursal`),
  UNIQUE KEY `idSucursal_UNIQUE` (`idSucursal`),
  KEY `fk_Sucursal_Empresa1_idx` (`idEmpresa`),
  KEY `fk_proyecto_idx` (`idProyecto`),
  CONSTRAINT `fk_Sucursal_Empresa1` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`idEmpresa`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursal`
--

LOCK TABLES `sucursal` WRITE;
/*!40000 ALTER TABLE `sucursal` DISABLE KEYS */;
INSERT INTO `sucursal` VALUES (1,'SUCURSAL CENTRO','`db_ruidocx`.`empresa` `nombre`',0,1),(2,'SUCURSAL PALACIO','`db_ruidocx`.`empresa` `nombre`',0,2),(3,'SUCURSAL RIO','`db_ruidocx`.`empresa` `nombre`',0,2);
/*!40000 ALTER TABLE `sucursal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoDeUsuario`
--

DROP TABLE IF EXISTS `tipoDeUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoDeUsuario` (
  `idTipoDeUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idTipoDeUsuario`),
  UNIQUE KEY `idTipoDeUsuario_UNIQUE` (`idTipoDeUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoDeUsuario`
--

LOCK TABLES `tipoDeUsuario` WRITE;
/*!40000 ALTER TABLE `tipoDeUsuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipoDeUsuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoDocumento`
--

DROP TABLE IF EXISTS `tipoDocumento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoDocumento` (
  `idTipoDocumento` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idTipoDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoDocumento`
--

LOCK TABLES `tipoDocumento` WRITE;
/*!40000 ALTER TABLE `tipoDocumento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipoDocumento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trabajador` (
  `idTrabajador` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `cargorrhh` int(11) DEFAULT NULL,
  `representativo` varchar(45) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `idPuestoDeTrabajo` int(11) DEFAULT NULL,
  `idGes` int(11) DEFAULT NULL,
  `idUsuario` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`idTrabajador`),
  UNIQUE KEY `idTrabajador_UNIQUE` (`idTrabajador`),
  KEY `fk_Trabajador_Grupo1_idx` (`idGes`),
  KEY `fk_Trabajador_Usuarios1_idx` (`idUsuario`),
  KEY `fk_Trabajador_PuestoDeTrabajo1_idx` (`idPuestoDeTrabajo`),
  KEY `fk_Trabajador_Sucursal1_idx` (`idSucursal`),
  CONSTRAINT `fk_Trabajador_Grupo1` FOREIGN KEY (`idGes`) REFERENCES `ges` (`idGes`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trabajador_PuestoDeTrabajo1` FOREIGN KEY (`idPuestoDeTrabajo`) REFERENCES `puestoDeTrabajo` (`idPuestoDeTrabajo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trabajador_Sucursal1` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trabajador_Usuarios1` FOREIGN KEY (`idUsuario`) REFERENCES `Users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajador`
--

LOCK TABLES `trabajador` WRITE;
/*!40000 ALTER TABLE `trabajador` DISABLE KEYS */;
/*!40000 ALTER TABLE `trabajador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idUsers` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT '0',
  `reset_token` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idPerfil` int(11) DEFAULT NULL,
  `idSucursal` int(11) NOT NULL,
  `cantidadPuntosUser` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`idUsers`),
  KEY `fk_Usuarios_Perfil1_idx` (`idPerfil`),
  KEY `fk_Usuarios_Sucursal1_idx` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersCompraPuntos`
--

DROP TABLE IF EXISTS `usersCompraPuntos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usersCompraPuntos` (
  `idUsersCompraPuntos` int(11) NOT NULL AUTO_INCREMENT,
  `idUsers` bigint(20) NOT NULL,
  `idCompraPuntos` int(11) NOT NULL,
  PRIMARY KEY (`idUsersCompraPuntos`),
  KEY `idForaneoUsers_idx` (`idUsers`),
  KEY `idForaneoCompraPuntos_idx` (`idCompraPuntos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersCompraPuntos`
--

LOCK TABLES `usersCompraPuntos` WRITE;
/*!40000 ALTER TABLE `usersCompraPuntos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersCompraPuntos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoresPredefinidos`
--

DROP TABLE IF EXISTS `valoresPredefinidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `valoresPredefinidos` (
  `idValoresPredefinidos` int(11) NOT NULL AUTO_INCREMENT,
  `idFuente` int(11) NOT NULL,
  `nps` int(11) DEFAULT NULL,
  `distanciaInicial` int(11) DEFAULT NULL,
  PRIMARY KEY (`idValoresPredefinidos`),
  KEY `fk_ValoresPredeinidos_Fuente1_idx` (`idFuente`),
  CONSTRAINT `fk_ValoresPredeinidos_Fuente1` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`idFuente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoresPredefinidos`
--

LOCK TABLES `valoresPredefinidos` WRITE;
/*!40000 ALTER TABLE `valoresPredefinidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoresPredefinidos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-29 21:58:30
