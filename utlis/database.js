const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.MYSQL_DATABASE_NAME, process.env.MYSQL_USER_NAME, process.env.MYSQL_USER_PASSWORD, {
  host: process.env.HOST,
  dialect:  'mysql' /* one of| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports=sequelize;

