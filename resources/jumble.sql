-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2021 at 02:19 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jumble`
--

-- --------------------------------------------------------

--
-- Table structure for table `icons`
--

CREATE TABLE `icons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `icons`
--

INSERT INTO `icons` (`id`, `name`, `link`, `path`) VALUES
(1, 'blank_space', '', ''),
(2, 'discord', 'https://discord.com', 'resources/images/discord.png'),
(3, 'disneyplus', 'https://www.disneyplus.com/', 'resources/images/disneyplus.png'),
(4, 'facebook', 'https://www.facebook.com/', 'resources/images/facebook.png'),
(5, 'hbo', 'https://www.hbo.com/', 'resources/images/hbo.png'),
(6, 'instagram', 'https://wwww.instagram.com', 'resources/images/instagram.svg'),
(7, 'netflix', 'https://www.netflix.com', 'resources/images/netflix.png'),
(8, 'pinterest', 'https://www.pinterest.com', 'resources/images/pinterest.png'),
(9, 'reddit', 'https://www.reddit.com', 'resources/images/reddit.png'),
(10, 'slack', 'https://www.slack.com', 'resources/images/slack.png'),
(11, 'spotify', 'https://www.spotify.com', 'resources/images/spotify.png'),
(12, 'tiktok', 'https://www.tiktok.com', 'resources/images/tiktok.png'),
(13, 'twitter', 'https://www.twitter.com', 'resources/images/twitter.png'),
(14, 'youtube', 'https://www.youtube.com', 'resources/images/youtube.png'),
(99, 'group', '', 'resources/folder.svg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `theme` int(11) NOT NULL DEFAULT 0,
  `icons` varchar(535) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fname`, `lname`, `theme`, `icons`) VALUES
(1, 'harter2@rpi.edu', '$2y$10$fkCD0jl3NZvMUkKplODM9uZ8IElkMs02/JnII1pyccf25/0qLwvoS', 'Russell', 'Harter', 2, ''),
(2, 'sejqueen@gmail.com', '$2y$10$OE3uEkZ5qV2/sp2kvCHOq.l8KsjDahQ37Yy7B5HxpOyJtWTMhZTyK', 'Sejuani', 'Winter\'s Claw', 2, ''),
(3, 'coolguy@gmail.com', '$2y$10$Z9aZKOWJJ5CeJqxoCNfGc.tJJW2sSUOBvdk9dxdLEb5BluVk6h6RS', 'Coolguy', 'Dudeguy', 0, '{\"main\":[[\"1\"],[\"6\"],[\"1\"],[\"2\"],[\"99\",[\"7\",\"8\",\"9\"]],[\"1\"],[\"5\"],[\"1\"],[\"8\"],[\"1\"],[\"1\"],[\"2\"],[\"1\"],[\"9\"],[\"1\"],[\"9\"],[\"1\"],[\"7\"],[\"1\"],[\"9\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"3\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"3\"]],\"bot\":[\"11\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\"]}'),
(4, 'a@a.a', '$2y$10$3Us3tdD8Eizo57MkyYanVeE7WrQVDq2rTGI3XZFm6lWUwh73t80mW', NULL, NULL, 0, NULL),
(5, 'a@a.asd', '$2y$10$KZjSvYkMmgrsMifqw30TOeGoe1H7rz0C4Sy/57aQMiSrT1LihxsqO', NULL, NULL, 0, NULL),
(6, 'aEmail@gmail.com', '$2y$10$eX6uv0iV299AgH.aq/yB/uha2sY7dc.0QvlOUT71nMEpioxs0BGYm', NULL, NULL, 1, NULL),
(7, 'hadav@rpi.edu', '$2y$10$ony8vvhVbUNjTPiFWRVD1uDZfA5thLF27.sDoMu9gYWiC5h0SqfBS', 'Vishal', 'Hada', 0, NULL),
(8, 'coolguy2@gmail.com', '$2y$10$msvhQnDaAaDeUkCaT4p3MuurIpmbjlwsm8w.lG2oMAVL0RPwfYM2y', 'test', NULL, 1, '{\"main\":[\"6\",\"13\",\"1\",\"4\",\"12\",\"99\",\"2\",\"10\",\"7\",\"5\",\"99\",\"1\",\"1\",\"1\",\"14\",\"1\",\"3\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"9\",\"1\",\"1\",\"1\",\"1\",\"3\",\"11\"],\"bot\":[\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\"]}'),
(9, 'coolguy3@gmail.com', '$2y$10$I9XkSYRUWe2nQbBMPCZateUbbeyqNah0BGGU4ViFeWjYIx6DEdcqO', NULL, NULL, 0, '{\"main\":[[\"6\"],[\"13\"],[\"1\"],[\"4\"],[\"14\"],[\"99\",[\"10\",\"10\"]],[\"12\"],[\"9\"],[\"8\"],[\"2\"],[\"10\"],[\"7\"],[\"5\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"3\"]],\"bot\":[\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\",\"box-small\"]}'),
(10, 'coolguy4@gmail.com', '$2y$10$Fxw4309G8T/Kuk7NxtBrn.HxN1.ZAEcRE633jr494E7pvNiZb3xoS', NULL, NULL, 0, '{\"main\":[[\"6\"],[\"13\"],[\"1\"],[\"4\"],[\"12\"],[\"9\"],[\"8\"],[\"2\"],[\"10\"],[\"7\"],[\"5\"],[\"99\",[\"10\",\"10\"]],[\"1\"],[\"1\"],[\"1\"],[\"14\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"1\"],[\"3\"]],\"bot\":[\"11\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\"]}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `icons`
--
ALTER TABLE `icons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `icons`
--
ALTER TABLE `icons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
