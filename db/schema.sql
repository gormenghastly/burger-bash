DROP DATABASE IF EXISTS burgerBash_db;

CREATE DATABASE burgerBash_db;

USE burgerBash_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);

