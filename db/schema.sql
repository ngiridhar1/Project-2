### Schema FOR Project-2, a e-Nutrition application

DROP DATABASE IF EXISTS nutritionDB;
CREATE database nutritionDB;

USE nutritionDB;

CREATE TABLE getfit (
  id       INT         NOT NULL AUTO_INCREMENT,
  name     VARCHAR(40) NOT NULL,
  email    VARCHAR(40) NOT NULL,
  height   INT NOT NULL,
  weight   INT NOT NULL,
  age      INT NOT NULL,
  gender   VARCHAR(1) NOT NULL,
  calbudget INT NOT NULL,
  indate   DATE NULL,
  calories INT  NULL,
  PRIMARY KEY (id)
 );