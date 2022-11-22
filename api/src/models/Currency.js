const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('currency', {
        type: {
            type: DataTypes.STRING,
        },
        buyPrice: {
            type: DataTypes.STRING,
        },
        sellPrice: {
            type: DataTypes.STRING
        }
    });
};