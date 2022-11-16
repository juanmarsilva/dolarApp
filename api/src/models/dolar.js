const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('dolar', {
        type: {
            type: DataTypes.STRING,
        },
        buyPrice: {
            type: DataTypes.STRING,
        },
        sellPrice: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })
}

/*
const dolar = [
    actualizacion: 15/11/22,
    info: [
        oficial: {
            compra: ...,
            venta: ...,
        },
        blue: {
            compra: ...,
            venta: ...,
        },
        ccl: {
            compra: ...,
            venta: ...,
        },
        bolsa: {
            compra: ...,
            venta: ...,
        },
        qatar: {
            compra: ...,
            venta: ...,
        }
    ]
]

*/