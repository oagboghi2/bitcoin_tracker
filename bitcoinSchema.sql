DROP DATABASE IF EXISTS bitcoin;
        CREATE DATABASE bitcoin;

\c bitcoin

  DROP TABLE users;
CREATE TABLE users(
          id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
   last_name VARCHAR(100),
    username VARCHAR(100),
    password VARCHAR(100)
  );

  DROP TABLE bitcoin;
CREATE TABLE bitcoin(
              id SERIAL PRIMARY KEY,
    btc_quantity INTEGER,
       btc_price DECIMAL,
date_of_purchase DATE,
users_id INTEGER REFERENCES users(id)
);


INSERT INTO users (first_name, last_name, username,password) VALUES ('John', 'Doe', 'JDOE', 'abc123');
INSERT INTO users (first_name, last_name, username,password) VALUES ('Jane', 'Dow', 'JDOW', 'dbdb');
INSERT INTO users (first_name, last_name, username,password) VALUES ('Logan', 'Howlett', 'wolverine', 'xman');
INSERT INTO users (first_name, last_name, username,password) VALUES ('Hugh', 'Jackman', 'A2TOR', 'showman');


INSERT INTO bitcoin (btc_quantity, btc_price, date_of_purchase, users_id) VALUES (2,600.03, '2016-10-06',1);
INSERT INTO bitcoin (btc_quantity, btc_price, date_of_purchase, users_id) VALUES (5,30.00, '2011-06-08',2);
INSERT INTO bitcoin (btc_quantity, btc_price, date_of_purchase, users_id) VALUES (1,10000.00, '2017-11-01',1);
INSERT INTO bitcoin (btc_quantity, btc_price, date_of_purchase, users_id) VALUES (4,900.03, '2017-01-02',3);
