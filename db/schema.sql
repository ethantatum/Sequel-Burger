### Burgers SCHEMA

CREATE DATABASE sql_burgers_db;
USE sql_burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);