const Sequelize = require('sequelize');
const User = require('./models/user');
const Game = require('./models/game');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: '5433'
});

const sync = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    User.defineUserModel(sequelize, Sequelize);
    Game.defineGameModel(sequelize, Sequelize);
    sequelize.sync();
};

module.exports = {
    sync
};