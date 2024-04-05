CREATE TABLE user(
user_id INTEGER (256) PRIMARY KEY AUTOINCREMENT,
    password VARCHAR(30) NOT NULL,
    first_name VARCHAR(256) NOT NULL,
    last_name VARCHAR(256) NOT NULL,
    address VARCHAR(256) NOT NULL,
    postcode VARCHAR(6) NOT NULL,
    telephone_number INTEGER(10) NOT NULL,
    date_of_birth INTEGER(8) NOT NULL,
    subscription_type VARCHAR(256) NOT NULL,
    payment_method VARCHAR(256) NOT NULL
);

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (1,
     'test',
     'Alexander',
     'Le',
     'Utrecht',
     '1234AB',
     0600000000,
     01012000,
     'Student',
     'PayPal');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (2,
     'test1',
     'Liselot',
     'Ankone',
     'Arnhem',
     '1234AB',
     0600000001,
     01012001,
     'Teacher',
     'iDeal');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (3,
     'test2',
     'Jieni',
     'Ding',
     'Almere',
     '1234AD',
     0600000002,
     01012002,
     'Elderly',
     'Mastercard');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (4,
     'test3',
     'Sergey',
     'Sergenov',
     'Utrecht',
     '1234AE',
     0600000003,
     01012003,
     'Professor',
     'Visa');

INSERT INTO
    user (user_id, password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method)
VALUES
    (5,
     'test4',
     'Aditya',
     'Joshi',
     'Utrecht',
     '1234AF',
     0600000004,
     01012004,
     'Staff',
     'iDeal');

UPDATE user
SET subscription_type = 'Student'
WHERE user_id = 3;

