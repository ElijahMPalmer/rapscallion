DROP DATABASE IF EXISTS rapusers;
CREATE DATABASE rapusers;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id INT GENERATED ALWAYS AS IDENTITY,
    username TEXT, 
    passkey TEXT
);

INSERT INTO users(username, passkey) VALUES ('King123', 'Doggie');

