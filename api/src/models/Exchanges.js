const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('exchanges', {
        arsUsd: {
            type: DataTypes.STRING,
        },
        eurUsd: {
            type: DataTypes.STRING,
        },
        uruUsd: {
            type: DataTypes.STRING,
        },
        chUsd: {
            type: DataTypes.STRING,
        },
        realUsd: {
            type: DataTypes.STRING,
        },
    },{
        timestamps: false
    });

}