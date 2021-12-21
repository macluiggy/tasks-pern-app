CREATE DATABASE first_pern_database;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40)
);

INSERT INTO users (name) VALUES
    ('spiderman');

--create a task database
CREATE DATABASE tasksdb;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE,
  description VARCHAR(255) NOT NULL,
  status VARCHAR(40)
);

INSERT INTO tasks (title, description, status) VALUES
    ('Learn to code', 'Learn to code in a language of your choice', 'todo'),
    ('Learn to cook', 'Learn to cook in a language of your choice', 'todo'),
    ('Learn to dance', 'Learn to dance in a language of your choice', 'todo');

--devuelve la fecha actual
SELECT NOW();