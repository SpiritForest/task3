let UserModel;

const defineUserModel = function(sequelize, DataTypes) {
    UserModel = sequelize.define('user', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })
};

const create = (data) => {
    return UserModel.create(data);
};

const findOne = (data) => {
   return UserModel.findOne(data);
};

module.exports = {
    defineUserModel,
    create,
    findOne
}

