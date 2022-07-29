-- ####-- SUPPRESSION DE L ANCIENNE BASE DE DONNEE -------
DROP DATABASE `evaluation`;

-- #### CREATION DE MON BASE DE DONNEE
CREATE DATABASE `evaluation`;

-- ### UTILISATION DE LA BASE DE DONNEE
USE `evaluation`;

--  #### ---- CREATION DE LA TABLE USER POUR LES UTILISATEURS --------
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avis` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` double NOT NULL,
  `formation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

-- #### ---------- insertion des valeurs --------------------------------

INSERT INTO `user` (`id`, `firstname`, `lastname`, `avis`, `note`, `formation`) VALUES
(11, 'Herilanto', 'Louis Denis', 'bien', 4, 'Frontend'),
(12, 'Iron', 'man', 'super', 5, 'Frontend'),
(13, 'CAPTAIN', 'america', 'bien', 4, 'Backend'),
(14, 'vin', 'Diesel', 'juste', 3, 'Backend'),
(15, 'Gibson', 'Tyrese', 'bon', 4, 'Marketing'),
(16, 'Natasha', 'Romanov', 'good', 4, 'Marketing'),
(17, 'Docteur', 'Strange', 'very well', 5, 'UX-UI'),
(18, 'Cristiano', 'Ronaldo', 'good', 4, 'UX-UI');
COMMIT;