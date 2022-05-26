const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize('mvc_tech_blog_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;