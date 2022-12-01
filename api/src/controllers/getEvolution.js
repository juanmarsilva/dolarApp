const { Evolution } = require('../db')

const getEvolution = async (req, res) => {
    try{
        const { type } = req.query
        if(type){
            const dbEvolution = await Evolution.findOne({
                where: {
                    name : type
                }
            })
            if(dbEvolution.name === 'inflacion') dbEvolution.days = []
            else dbEvolution.days = dbEvolution.days.filter(day => Object.entries(day)[0][1] !== null)
            res.send(dbEvolution)
        }
        else{
            res.status(404).json({message: 'Send a type of Dolar that you want as Query'})
        }
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { getEvolution }