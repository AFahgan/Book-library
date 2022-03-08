const connection = require('../config/connection');

const addbookDB = (name, author, publisher, cover, isbn, year) => connection.query({
  text: `INSERT INTO books (name, age, publisher, cover, isbn, year) 
        VALUES ($1, $2, $3, $4, $5, $6);`,
  values: [name, author, publisher, cover, isbn, year],
});

module.exports = addbookDB;
