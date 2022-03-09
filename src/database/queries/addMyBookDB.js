/* eslint-disable camelcase */
const connection = require('../config/connection');

const addMyBookDB = (Added_Date, cover, book_id) => connection.query({
  text: `INSERT INTO mybooks (Added_Date, cover, book_id) 
        VALUES ($1, $2, $3);`,
  values: [Added_Date, cover, book_id],
});
module.exports = addMyBookDB;
