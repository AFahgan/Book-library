const { Pool } = require('pg');
require('env2')('config.env');

let URL_DATABASE = '';

if (process.env.NODE_ENV === 'production') {
  URL_DATABASE = process.env.DATABASE_URL;
} else {
  URL_DATABASE = process.env.DB_URL;
}

if (!URL_DATABASE) {
  throw new Error('database not found');
}

const connection = new Pool({
  connectionString: URL_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;
