const getbookDB = require('../database/queries/getbookDB');

const getBook = (req, res) => {
  getbookDB()
    .then((data) => res.json(data.rows));
};

module.exports = getBook;
