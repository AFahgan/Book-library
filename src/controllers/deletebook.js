const deletebookDB = require('../database/queries/deletebookDB');

const deleteBook = (req, res) => {
  const bookId = req.params.id;
  deletebookDB(bookId);
  res.redirect('../mybooks.html');
};

module.exports = deleteBook;
