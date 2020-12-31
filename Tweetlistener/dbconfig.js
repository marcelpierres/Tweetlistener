const dbEngine = process.env.DB_Environment || 'development';
const config = require('./knexfile')[dbEngine];

module.exports = require('knex')(config)