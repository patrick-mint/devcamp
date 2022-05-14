-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 14, 2022 at 10:31 AM
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
-- Table structure for table `Soldlist`
--

CREATE TABLE `Soldlist` (
  `ISBNBook` text,
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `sold` int(11) NOT NULL,
  `datesold` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Soldlist`
--

INSERT INTO `Soldlist` (`ISBNBook`, `id`, `price`, `sold`, `datesold`) VALUES
('2385749372914', 1, 299, 2, '2022-05-12'),
('111111111110', 2, 399, 23, '2022-05-13'),
('111111111111', 14, 299, 2, '2022-05-13'),
('111111111112', 3, 599, 15, '2022-05-13'),
('111111111113', 4, 299, 20, '2022-05-07'),
('111111111114', 5, 499, 2, '2022-05-07'),
('111111111115', 6, 799, 1, '2022-05-08'),
('111111111116', 7, 399, 89, '2022-05-11'),
('111111111117', 8, 899, 22, '2022-05-10'),
('111111111118', 9, 599, 24, '2022-05-03'),
('111111111119', 10, 499, 33, '2022-05-12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
