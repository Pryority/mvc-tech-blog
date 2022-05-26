const seedUsers = require('./user-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
};

seed();