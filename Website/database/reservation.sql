CREATE TABLE reservation(
reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    reservation_date INTEGER(8) NOT NULL,
    CONSTRAINT userid_fk FOREIGN KEY(user_id) REFERENCES user(user_id),
    CONSTRAINT bookid_fk FOREIGN KEY(book_id) REFERENCES book(book_id)
);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(1,
 4,
 01012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 3,
 11012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 12,
 21012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(2,
 32,
 19012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(4,
 45,
 11012000);

INSERT INTO
    reservation(user_id, book_id, reservation_date)
VALUES
(3,
 21,
 01012001);

