CREATE DATABASE db_dimsum

USE db_dimsum

CREATE TABLE users (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    nameComplet VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    isPassword VARCHAR(255),
    admini VARCHAR(255),
);

CREATE TABLE Menu (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    dish VARCHAR(100) NOT NULL,
    sku VARCHAR(100) NOT NULL,
    descriptions VARCHAR(100) NOT NULL,
    price VARCHAR(100) NOT NULL,
    Id_category INT NOT NULL,
    FOREIGN KEY (Id_category) REFERENCES Category(Id_category),
    INDEX (Id_category),
    
);
CREATE TABLE Category (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    FOREIGN KEY (Id) REFERENCES Menu(Id),
    INDEX (Id),
);