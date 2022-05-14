-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 13, 2022 at 03:13 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `id` int(11) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `datestamp` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`id`, `firstname`, `lastname`, `age`, `datestamp`, `address`) VALUES
(1, 'Elaina', 'Desmond', 23, '0000-00-00', NULL),
(2, 'Gary', 'Blinckhorne', 50, '0000-00-00', NULL),
(3, 'Philippa', 'Alcock', 43, '0000-00-00', NULL),
(4, 'Briny', 'Brabbins', 34, '0000-00-00', NULL),
(6, 'Rory', 'Jobey', 52, '0000-00-00', NULL),
(7, 'Maureen', 'Phlippsen', 42, '0000-00-00', NULL),
(8, 'Rogerio', 'Edmands', 26, '0000-00-00', NULL),
(9, 'Vikki', 'Bradwell', 46, '0000-00-00', NULL),
(10, 'Daren', 'Le Houx', 34, '0000-00-00', NULL),
(11, 'Dolores', 'Bramhall', 21, '0000-00-00', NULL),
(12, 'Care', 'Burn', 20, '0000-00-00', NULL),
(13, 'Auberta', 'Gapper', 33, '0000-00-00', NULL),
(14, 'Tera', 'Earle', 24, '0000-00-00', NULL),
(15, 'Colman', 'Bosher', 52, '0000-00-00', NULL),
(16, 'Nikolos', 'Allnutt', 30, '0000-00-00', NULL),
(17, 'Lacie', 'O\' Donohoe', 53, '0000-00-00', NULL),
(18, 'Tova', 'Josefowicz', 22, '0000-00-00', NULL),
(19, 'Nariko', 'Grinikhinov', 44, '0000-00-00', NULL),
(20, 'Marybelle', 'Aggis', 49, '0000-00-00', NULL),
(21, 'Marsha', 'Drummond', 22, '0000-00-00', NULL),
(22, 'Marion', 'Doddrell', 18, '0000-00-00', NULL),
(23, 'Jan', 'Mauchline', 41, '0000-00-00', NULL),
(24, 'Welsh', 'Gouldstraw', 46, '0000-00-00', NULL),
(25, 'Eustace', 'Edowes', 20, '0000-00-00', NULL),
(26, 'Atalanta', 'Rawlence', 34, '0000-00-00', NULL),
(27, 'Annetta', 'Conklin', 20, '0000-00-00', NULL),
(28, 'Codi', 'Klewer', 27, '0000-00-00', NULL),
(29, 'Tedmund', 'Howick', 51, '0000-00-00', NULL),
(30, 'Harri', 'MacFadden', 39, '0000-00-00', NULL),
(NULL, 'Neil', 'Armstrong', 34, NULL, NULL),
(NULL, 'Leslie', 'Ellis', 24, NULL, NULL),
(NULL, 'Sandra', 'Hoffman', 35, NULL, NULL),
(NULL, 'Cameron', 'Meyer', 19, NULL, NULL),
(NULL, 'Cameron', 'Moore', 27, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
