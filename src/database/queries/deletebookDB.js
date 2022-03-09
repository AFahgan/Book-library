const connection = require('../config/connection');

const deletebookDB = (id) => {
  const sql = {
    text: 'delete from mybooks where id=$1 returning *',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deletebookDB;
