DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id INT GENERATED ALWAYS AS IDENTITY,
    first_name TEXT,
    last_name TEXT, 
    username TEXT, 
    passkey TEXT,

);

INSERT INTO users(first_name, last_name, username, passkey) VALUES ('Elijah', 'Palmer', 'King123', 'Doggie');