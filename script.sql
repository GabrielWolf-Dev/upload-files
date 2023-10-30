CREATE DATABASE upload_img;

CREATE TABLE `upload_img`.`picture` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `src` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
