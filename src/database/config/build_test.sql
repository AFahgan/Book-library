BEGIN;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS mybooks CASCADE;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
     cover VARCHAR(255) NOT NULL,
    isbn VARCHAR(255) NOT NULL,
    year INT NOT NULL
);

INSERT INTO books (name, author, publisher, cover, isbn, year) VALUES
('Ecce Homo', 'Friedrich Nietzsche', 'Henry van de Velde',
 'img',
 '059',
 1908
 );

CREATE TABLE mybooks (
    id SERIAL PRIMARY KEY,
    Added_Date VARCHAR(255) NOT NULL,
    cover VARCHAR(255) NOT NULL,


  "book_id" int NOT NULL REFERENCES "books" ("id")
);

INSERT INTO mybooks (Added_Date,cover,"book_id") VALUES
('10/03/2022', 'https://pbs.twimg.com/media/DsO5PtWWoAA90mF.jpg',1);



-- ALTER TABLE "mybooks" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");




COMMIT;