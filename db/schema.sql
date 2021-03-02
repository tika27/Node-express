DROP DATABASE IF EXISTS burg_db;

CREATE DATABASE burg_db;

USE burg_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(40) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id)
);

SELECT * FROM burgers;


-- //have not enter into database yet because its not working 