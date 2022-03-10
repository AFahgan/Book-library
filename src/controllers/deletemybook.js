const deletemybookDB = require('../database/queries/deletemybook');

const deletemyBook = (req, res) => {
  const bookId = req.params.id;
  deletemybookDB(bookId);
  res.redirect('../index.html');
};

module.exports = deletemyBook;
