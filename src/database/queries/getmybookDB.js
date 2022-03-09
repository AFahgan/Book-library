const connection = require('../config/connection');

const getmybookDB = () => {
  const sql = {
    text: 'SELECT * FROM mybooks;',
  };

  return connection.query(sql);
};

module.exports = getmybookDB;
