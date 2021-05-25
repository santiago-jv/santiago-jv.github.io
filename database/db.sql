CREATE DATABASE database_students;

USE database_students;

CREATE TABLE student(
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT(50) NOT NULL,
    age INT(150) NOT NULL
);

DESCRIBE student;