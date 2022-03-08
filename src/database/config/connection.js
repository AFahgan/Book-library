const { Pool } = require('pg');
require('env2')('config.env');

let URL_DATABASE = '';

if(process.env.NODE_ENV === 'test'){
  URL_DATABASE = process.env.DB_URL_TEST
}else  {
  URL_DATABASE = process.env.DB_URL
};

if(!URL_DATABASE){
  throw new Error(error);
};

const connection  = new Pool({
  connectionString: URL_DATABASE,
  ssl: false,
});

module.exports = connection; 
