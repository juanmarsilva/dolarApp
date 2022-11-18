const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('exchanges', {
        name : {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.STRING,
        },
    },{
        timestamps: false
    });

}