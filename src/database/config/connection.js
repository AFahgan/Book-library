const { Pool } = require('pg');
require('env2')('config.env');
let dbUrl = '';
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DB_URL_TEST;
} else {
  dbUrl = process.env.DATABASE_URL;
}
const options = {
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false },
};

const connection = new Pool(options);

module.exports = connection;
