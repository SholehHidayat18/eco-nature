-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2024 at 07:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

USE econature;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `econature`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `login_view`
-- (See below for the actual view)
--
CREATE TABLE `login_view` (
`id` int(11)
,`name` varchar(100)
,`email` varchar(100)
,`password_hash` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password_hash`, `created_at`, `updated_at`) VALUES
(1, 'Lina Yulianti', 'lina@example.com', '$2b$10$4q/0OtJ9Q9d.6GZQymRFWOGHDfDl0bplB7I.1jWjCVBXyE4o5MzJG', '2024-11-17 13:50:15', '2024-11-17 13:50:15'),
(2, 'Sholeh Hidayat', 'sholeh@example.com', '$2b$10$L/7NN.XB7bZwSysh7EdL2.Y6wo.DpMj5kIFLI8zF2Lx2bUdEebCZK', '2024-11-17 13:50:15', '2024-11-17 13:50:15'),
(3, 'Dyah Latri Kurnianingsih ', 'hidayatsholeh54@gmail.com', '$2b$10$0XidofhqD1BKxNGQ4imOwuzjCMMnkzFPPLwQye18RuPi809RdmsEq', '2024-11-18 05:24:07', '2024-11-18 05:24:07'),
(4, 'valdi', 'valdi@gmail.com', '$2b$10$/ngoA45oWubAMbOf3lbX/ejskt5.T2T.k7jjex9lDtVE05x0fUKNe', '2024-11-18 05:36:04', '2024-11-18 05:36:04'),
(5, 'ahmad', 'ahmad@gmail.com', '$2b$10$b9eBn7ZSOp.MQ05Q0qjG9eEsK38D4wmA9eKXmPzRZ3dGXGezd6gV2', '2024-11-18 05:47:56', '2024-11-18 05:47:56');

-- --------------------------------------------------------

--
-- Structure for view `login_view`
--
DROP TABLE IF EXISTS `login_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `login_view`  AS SELECT `users`.`id` AS `id`, `users`.`name` AS `name`, `users`.`email` AS `email`, `users`.`password_hash` AS `password_hash` FROM `users` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `delete_expired_tokens` ON SCHEDULE EVERY 1 DAY STARTS '2024-11-17 20:50:59' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM password_resets WHERE expires_at < NOW()$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
