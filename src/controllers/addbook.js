const addbookDB = require('../database/queries/addbookDB');

const addBook = (req, res) => {
  const {
    name, author, publisher, cover, isbn, year,
  } = req.body;
  addbookDB(name, author, publisher, cover, isbn, year)
    .then(() => {
      res.redirect('/');
    });
};
module.exports = addBook;
