const getmybookDB = require('../database/queries/getmybookDB');

const getmyBook = (req, res) => {
  getmybookDB()
    .then((data) => res.json(data.rows));
};

module.exports = getmyBook;
