drop database if exists chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (

  ID int NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  text text,
  userID int NOT NULL,
  roomID int NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

drop database if exists chat_test;
CREATE DATABASE chat_test;
USE chat_test;

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (

  ID int NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int NOT NULL AUTO_INCREMENT,
  text text,
  userID int NOT NULL,
  roomID int NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID)
);
