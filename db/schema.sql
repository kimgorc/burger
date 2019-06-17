###Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id init NOT NULL AUTO_INCREMENT,
    buger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);