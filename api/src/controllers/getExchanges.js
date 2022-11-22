const { Exchanges } = require('../db');

const getExchanges = async(req, res) => {
    try{
        const exchanges = await Exchanges.findAll()
        const nameAndValue = exchanges.map(coin => {
            return {
                name: coin.name,
                value: coin.value
            }
        })
        res.send(nameAndValue)
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    getExchanges
}