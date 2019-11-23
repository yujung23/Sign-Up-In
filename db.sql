CREATE DATABASE signUpIn;

USE signUpIn;

CREATE TABLE `user_info` (
    `num` int(11) NOT NULL AUTO_INCREMENT,
    `id` varchar(100) NOT NULL UNIQUE,
    `pw` varchar(255) NOT NULL,
    PRIMARY KEY (`num`)
);