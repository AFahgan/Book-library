const connection = require('../config/connection');

const getbookDB = () => {
  const sql = {
    text: 'SELECT * FROM books;',
  };

  return connection.query(sql);
};

module.exports = getbookDB;
