-- phpMyAdmin SQL Dump
-- version 2.11.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 21, 2020 at 06:35 PM
-- Server version: 5.0.51
-- PHP Version: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `inform_me`
--

-- --------------------------------------------------------

--
-- Table structure for table `im_reports`
--

CREATE TABLE `im_reports` (
  `id` int(11) NOT NULL auto_increment,
  `report_type_id` int(11) NOT NULL,
  `person_name` varchar(255) NOT NULL,
  `person_address` varchar(255) NOT NULL,
  `reporter_name` varchar(255) NOT NULL,
  `reporter_phone` varchar(255) NOT NULL,
  `is_active` enum('N','P','R') NOT NULL default 'N' COMMENT '''N=>New, P=>In Progress, R=> Resolved'',',
  `created_on` timestamp NOT NULL default CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `im_reports`
--

INSERT INTO `im_reports` (`id`, `report_type_id`, `person_name`, `person_address`, `reporter_name`, `reporter_phone`, `is_active`, `created_on`, `updated_on`) VALUES
(15, 1, 'Sunil Ghosh', '2/2 Ghoshpara lane, Kestopur, Kolkata-700097', 'Sourav Paul', '9098989890', 'N', '2020-04-21 23:19:24', '0000-00-00 00:00:00'),
(16, 2, 'Hiru Roy', 'Dum Dum road, Kolkata-700054', 'Prasen', '9098765687', 'N', '2020-04-21 23:20:17', '0000-00-00 00:00:00'),
(17, 2, 'Jack', '2/2 PK Guha road, Kolkata-700093', 'Hiranmoy', '9098767678', 'N', '2020-04-21 23:22:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `im_report_types`
--

CREATE TABLE `im_report_types` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `created_on` timestamp NOT NULL default CURRENT_TIMESTAMP,
  `updated_on` datetime NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `im_report_types`
--

INSERT INTO `im_report_types` (`id`, `name`, `created_on`, `updated_on`) VALUES
(1, 'Suspected person', '2020-04-12 10:18:34', '2020-04-12 10:18:03'),
(2, 'Domestic violence', '2020-04-12 10:18:34', '2020-04-12 10:18:28');
