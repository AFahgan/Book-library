const addMyBookDB = require('../database/queries/addMyBookDB');

const addMyBook = (req, res) => {
  const {
    // eslint-disable-next-line camelcase
    Added_Date, cover, book_id,
  } = req.body;
  addMyBookDB(Added_Date, cover, book_id)
    .then(() => {
      res.redirect('/');
    });
};
module.exports = addMyBook;
