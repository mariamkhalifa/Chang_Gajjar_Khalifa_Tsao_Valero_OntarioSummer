-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 10, 2020 at 08:23 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hack_2020`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_onsummer_user`
--

CREATE TABLE `tbl_onsummer_user` (
  `user_id` int(11) NOT NULL,
  `user_fname` varchar(40) NOT NULL,
  `user_lname` varchar(50) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_country` varchar(200) NOT NULL,
  `user_subdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_lastdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_onsummer_user`
--

INSERT INTO `tbl_onsummer_user` (`user_id`, `user_fname`, `user_lname`, `user_email`, `user_country`, `user_subdate`, `user_lastdate`) VALUES
(1, 'bobby', 'bobby', 'bobbybobby@gmail.com', 'Afganistan', '2020-02-10 08:14:07', '2020-02-11 00:01:10'),
(2, 'Ting-Hsuan', 'Tsao', 'SandraTsao0405@gmail.com', 'Canada', '2020-02-11 00:01:17', '2020-02-11 01:04:50'),
(3, 'Mariam', 'Khalifa', 'mariam.khalifa.gabr@gmail.com', 'Canada', '2020-02-11 00:32:54', '2020-02-11 00:40:55'),
(4, 'Kahani', 'Gajjar', 'kahani.gajjar@gmail.com', 'India', '2020-02-11 01:06:52', '2020-02-11 01:06:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_onsummer_user`
--
ALTER TABLE `tbl_onsummer_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_onsummer_user`
--
ALTER TABLE `tbl_onsummer_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
