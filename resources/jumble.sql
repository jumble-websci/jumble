-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2021 at 07:29 AM
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
(1, 'blank space', '', ''),
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
(15,'webex', 'https://www.webex.com/', 'resources/images/Webex.png'),
(16,'blackboard', 'https://lms.rpi.edu/', 'resources/images/blackboard.png'),
(17,'twitch', 'https://www.twitch.tv/', 'resources/images/twitch.jpg'),
(99, 'group', '', '');

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
(3, 'coolguy@gmail.com', '$2y$10$Z9aZKOWJJ5CeJqxoCNfGc.tJJW2sSUOBvdk9dxdLEb5BluVk6h6RS', NULL, NULL, 0, '{\"main\":[\"6\",\"13\",\"1\",\"4\",\"14\",\"12\",\"9\",\"99\",\"8\",\"2\",\"10\",\"7\",\"99\",\"5\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"3\"],\"bot\":[\"11\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\",\"1\"]}');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
