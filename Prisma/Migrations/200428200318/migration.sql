-- CreateTable
CREATE TABLE `actionMovies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `director` VARCHAR(50) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `rating` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comedyMovies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `director` VARCHAR(50) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `rating` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dramaMovies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `director` VARCHAR(50) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `rating` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horrorMovies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `director` VARCHAR(50) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `rating` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sciFiMovies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `director` VARCHAR(50) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `rating` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
