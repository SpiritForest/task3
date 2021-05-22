const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    dialect: 'postgres'
});

const sync = () => {
    sequelize.authenticate().then(
        function success() {
            console.log("Connected to DB");
        },
    
        function fail(err) {
            console.log(`Error: ${err}`);
        }
    )
};

module.exports = { sync };

