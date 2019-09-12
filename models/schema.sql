DROP DATABASE IF EXISTS nutritionDB;
CREATE database nutritionDB;

USE nutritionDB;

CREATE TABLE getfit (
  userid   VARCHAR(10) NOT NULL,
  password VARCHAR(15) NULL,
  height   INT NOT NULL,
  weight   INT NOT NULL,
  age      INT NOT NULL,
  gender   VARCHAR(1) NOT NULL,
  indate   DATE NOT NULL,
  calories INT NOT NULL,
  PRIMARY KEY (userid)
 );
  