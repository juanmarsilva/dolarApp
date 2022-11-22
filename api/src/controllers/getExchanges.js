const { Exchanges } = require('../db');

const getExchanges = async(req, res) => {
    try{
        const exchanges = await Exchanges.findAll()
        res.send(exchanges)
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    getExchanges
}