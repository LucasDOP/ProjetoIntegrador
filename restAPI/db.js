const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
  host: 'localhost',
  database: 'PI03',
  password: 'Sao3em1',
  port: 5432,

});

module.exports = pool;