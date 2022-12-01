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
            console.log(dbEvolution)
            if(dbEvolution.name === 'inflacion') dbEvolution.days = []
            else dbEvolution.days = dbEvolution.days.filter(day => day !== null)
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