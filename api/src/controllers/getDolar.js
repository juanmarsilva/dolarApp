const { Currency } = require('../db')

const getAllDolars = async (req, res) => {
    try{
        const dbDolar = await Currency.findAll()
        const response = dbDolar.map(dolar => {
            return {
                name: dolar.dataValues.type,
                buyPrice: dolar.dataValues.buyPrice,
                sellPrice: dolar.dataValues.sellPrice}
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
