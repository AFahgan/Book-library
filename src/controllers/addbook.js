const addbookDB = require('../database/queries/addbookDB');

const addBook = (req, res) => {
  const {
    name, author, publisher, cover, isbn, year,
  } = req.body;
  addbookDB(name, author, publisher, cover, isbn, year)
    .then(res.redirect('/addbook.html'))
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};
module.exports = addBook;
