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
 '978-0140445152',
 1908
 );

CREATE TABLE mybooks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
     cover VARCHAR(255) NOT NULL,
  "book_id" int NOT NULL
);

INSERT INTO mybooks (name, cover,"book_id") VALUES
('Ecce Homo', 'img' ,1);


ALTER TABLE "mybooks" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("id");




COMMIT;