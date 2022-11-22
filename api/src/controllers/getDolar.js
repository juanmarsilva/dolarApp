const { Currency } = require('../db')

const getAllDolars = async (req, res) => {
    try{
        const dbDolar = await Currency.findAll()
        const response = dbDolar.map(dolar => {
            return {
                nombre: dolar.dataValues.type,
                compra: dolar.dataValues.buyPrice,
                venta: dolar.dataValues.sellPrice}
        })
        res.send(response)
        }
    catch (error){
        console.log(error)
    }
}


module.exports = {
    getAllDolars
}
