const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('evolution', {
        name: {
            type: DataTypes.STRING
        },
        months: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        days: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        }
    }, 
    {
        timestamps: false
    });
}