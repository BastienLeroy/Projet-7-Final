-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bsf4pyjrvqgcp9qzmyvc-mysql.services.clever-cloud.com:3306
-- Generation Time: May 19, 2021 at 09:12 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsf4pyjrvqgcp9qzmyvc`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `user_id`, `content`) VALUES
(2, 8, 13, 'Salut, Arthur ah, ben tourné vers là-bas c\'est sûr, moi non plus je vois rien. Ah mais non arrêtez, là, on va se faire repérer, là. C’est du patrimoine ça? Déjà à la corne, ils regardent même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous voudrez! Oh mais j’m’en fais pas. J’vais m’entrainer jusqu’à c’que ça marche! Vous binez pas… Même nous on a pas tout compris. Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux!'),
(4, 7, 12, 'Ah, ben tourné vers là-bas c\'est sûr, moi non plus je vois rien. Ah mais non arrêtez, là, on va se faire repérer, là. C’est du patrimoine ça? Déjà à la corne, ils regardent même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous voudrez! Oh mais j’m’en fais pas. J’vais m’entrainer jusqu’à c’que ça marche! Vous binez pas… Même nous on a pas tout compris. Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux!'),
(8, 7, 12, 'Mon commentaire'),
(9, 2, 12, 'Un nouvel ajout...'),
(13, 7, 12, 'ajout !'),
(14, 5, 12, 'dernier com...'),
(15, 8, 12, 'hey!\n'),
(16, 8, 12, 'un post'),
(17, 7, 12, 'y a plus de place'),
(18, 7, 12, 'yo'),
(21, 9, 12, 'Quel beau nyancat'),
(22, 9, 12, 'coucou'),
(23, 8, 12, ''),
(24, 8, 12, ''),
(26, 27, 12, 'Hello'),
(30, 16, 33, 'Trop drôle ! '),
(31, 9, 13, 'J\'avoue il est beau !');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `image_url` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `image_url`, `content`) VALUES
(7, 13, 'http://localhost:5000/images/posts/16.jpg1621352251869.jpg', 'Qu’est ce que j’ai dit? Une connerie? Déjà à la corne, ils regardent même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous voudrez! S\'il y a un autre qui groupe qui arrive par là on est marron des deux côtés. On va pas rester plantés là comme des radis. Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux!\n '),
(8, 12, 'http://localhost:5000/images/posts/z750.jpg', 'Faut faire un feu en forme de cercle autour d\'eux, comme ça ils se suicident, pendant que nous on fait le tour, et on lance de la caillasse de l\'autre côté pour brouiller. Non? Y a quand même pas cinquante trucs à retenir bon sang! Ils sont encore là, ces cons! Allez-y mollo avec la joie! N’empêche que tout le monde parle de moi! C’est quand même un signe! Alors là, personne sait qui est tombé et tout le monde s’en fout! On vous met une dague sous le cou et on traverse le camp en gueulant \"bougez-pas, bougez-pas ou un bute le roi\".'),
(9, 12, 'http://localhost:5000/images/posts/gif-anime.gif', 'Faut faire un feu en forme de cercle autour d\'eux, comme ça ils se suicident, pendant que nous on fait le tour, et on lance de la caillasse de l\'autre côté pour brouiller. Non? Y a quand même pas cinquante trucs à retenir bon sang! Ils sont encore là, ces cons! Allez-y mollo avec la joie! N’empêche que tout le monde parle de moi! C’est quand même un signe! Alors là, personne sait qui est tombé et tout le monde s’en fout! On vous met une dague sous le cou et on traverse le camp en gueulant \"bougez-pas, bougez-pas ou un bute le roi\".'),
(10, 12, 'http://localhost:5000/images/posts/1.gif', 'Qu’est ce que j’ai dit? Une connerie? Déjà à la corne, ils regardent même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous voudrez! S\'il y a un autre qui groupe qui arrive par là on est marron des deux côtés. On va pas rester plantés là comme des radis. Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux!\r\n\r\nNon, j’vais varier les fruits, n’vous inquiétez pas. La vache! Ca vous rend pas aimable en tout cas, hein! Ouais… Ouais je me suis gouré… Allez-y mollo avec la joie!\r\n\r\n'),
(11, 12, 'http://localhost:5000/images/posts/2.gif', 'Non, j’vais varier les fruits, n’vous inquiétez pas. La vache! Ca vous rend pas aimable en tout cas, hein! Ouais… Ouais je me suis gouré… Allez-y mollo avec la joie!\r\n\r\n'),
(12, 12, 'http://localhost:5000/images/posts/MT09.jpg', ' Allez-y mollo avec la joie!\r\n\r\n'),
(13, 12, 'http://localhost:5000/images/posts/13.jpg', 'Non, j’vais varier les fruits, n’vous inquiétez pas. La vache! Ca vous rend pas aimable en tout cas, hein! Ouais… Ouais je me suis gouré…\r\n'),
(14, 12, 'http://localhost:5000/images/posts/15.jpg', 'Non, j’vais varier les fruits, n’vous inquiétez pas. La vache! Ca vous rend pas aimable en tout cas, hein! Ouais… Ouais je me suis gouré…\r\n'),
(15, 12, 'http://localhost:5000/images/posts/9.jpg', 'News projet Bike\r\n'),
(16, 12, 'http://localhost:5000/images/posts/4.gif', 'Oui, ou une fissure à colmater dans un muret. Ben je suis pas mystérieux moi! J’suis même pas solitaire. Ah mais non arrêtez, là, on va se faire repérer, là. Encore une chance qu’on se soit pas fait construire un buffet à vaisselle. '),
(18, 12, 'http://localhost:5000/images/posts/5.gif', 'Ca vous emmerde ce que j’raconte? Ca vous emmerde ce que j’raconte? Mais… C’est le Chevalier de Provence ou le Chevalier Gaulois? Faudrait savoir! Pas foutu de savoir son nom! '),
(19, 12, 'http://localhost:5000/images/posts/16.jpg', 'Léodagan et moi on fait semblant de vous prendre en otage. On construit un barrage, après on lance de la caillasse de l\'autre côté de la rivière pour faire croire aux autres qu\'on a traversé dans l\'autre sens, une fois qu\'ils sont au milieu, on casse le barrage et on les noie. On dit que là où il passe l’herbe ne repousse pas! A genoux, pas à genoux c’est une chose... Enfin en attendant je vous donne pas tout notre or. '),
(20, 12, 'http://localhost:5000/images/posts/17.jpg', 'On dit que là où il passe l’herbe ne repousse pas! A genoux, pas à genoux c’est une chose... Enfin en attendant je vous donne pas tout notre or. '),
(21, 12, 'http://localhost:5000/images/posts/10.jpg', 'imaux de la forêt! Auw auw ouh, woh woh woh woh, auw aouh! On plaisante, on plaisante… La vache! Ca vous rend pas aimable en tout cas, hein! Non Provençal c’est mon nom. Droit devant, en plein dans leurs tronches. Oh mais j’m’en fais pas. J’vais m’entrainer jusqu’à c’que ça marche! '),
(22, 12, 'http://localhost:5000/images/posts/12.jpeg', 'Animaux de la forêt! Auw auw ouh, woh woh woh woh, auw aouh! On plaisante, on plaisante… La vache! Ca vous rend pas aimable en tout cas, hein! Non Provençal c’est mon nom. Droit devant, en plein dans leurs tronches. Oh mais j’m’en fais pas. J’vais m’entrainer jusqu’à c’que ça marche! '),
(23, 12, 'http://localhost:5000/images/posts/14.jpg1621334074146.jpg', 'Nouveau BF bientôt!'),
(27, 12, 'http://localhost:5000/images/posts/11.jpg1621339343482.jpg', 'Hello World !'),
(29, 33, 'http://localhost:5000/images/posts/6.gif1621358614827.gif', 'Hello ! Voici mon 1er post ...');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `firstname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isMod` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `image_url`, `name`, `firstname`, `email`, `password`, `isMod`) VALUES
(12, 'http://localhost:5000/images/users/Me.jpg1621352477733.jpg', 'Leroy', 'Bastien', 'bastien.leroy31@gmail.com', '$2b$10$8O.MbGkvwoFAH3bUXod2gOrct1c3tT77teHi/r1Bo/m2qB50vJ25q', 1),
(31, NULL, NULL, NULL, 'lenna@test.com', '$2b$10$ZzQIlW6T5cks3mbkmEPyhOhZAI3EwfmLZJlmULkvb/GSEh9lDJ.Yu', 0),
(33, 'http://localhost:5000/images/users/minou.jpg1621358584074.jpg', 'Ortega', 'Méline', 'Meline@test.com', '$2b$10$poCeR5ziWLpCrMwOfga8iuqciQ5qrTx8ruChaSKKWxs9N7v/VXTMW', 0),
(34, 'http://localhost:5000/images/users/Celinejpg.jpg1621448495491.jpg', 'Leroy', 'Celine', 'celine@test.com', '$2b$10$tZHxQbsNTf3ZgKoUoSxR1OTe7E0Bxc.1VpchUOaTGKCh3YvooADyO', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
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
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
