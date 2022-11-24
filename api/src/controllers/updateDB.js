const convert = require('xml-js')
const axios = require('axios');
const { Currency, Evolution, Exchanges } = require('../db');
const { BRCA_TOKEN } = process.env


const getAllCurrencies = async () => {
    try{
        const allData = await getAllData()
        const dolarData = getPrices(allData)
        await Currency.bulkCreate(dolarData)
        const evolutionDolar = getEvolution(allData)
        const evolutionInflation = await getInflation()
        await Evolution.bulkCreate([...evolutionDolar,evolutionInflation])
        const exchanges = getExchanges(allData)
        await Exchanges.bulkCreate(exchanges)
    }
    catch (error) {
        console.log(error)
    }
};

const getAllData = async () => {
    try {
        const dataDolar = await axios.get("https://www.dolarsi.com/api/dolarSiInfo.xml")
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const jsonParsed = JSON.parse(json);
        return jsonParsed
    }
    catch (error) {
        console.log(error)
    }
}

const getPrices = (allData) => {
    const data = allData.cotiza.valores_principales
    const arrayData = []
    Object.values(data).forEach(e => {
        if(e.nombre._text !== 'Bitcoin' && e.nombre._text !== 'Dolar Soja'){
            e.compra.text = twoDecimals(e.compra._text)
            e.venta._text = twoDecimals(e.venta._text)
            arrayData.push({
                type: e.nombre._text === 'Dolar Contado con Liqui'? 'Dolar CCL' : e.nombre._text,
                buyPrice: e.compra._text,
                sellPrice: e.venta._text,
            }) 
        }
    })
    
    const sellOficial = arrayData.find(dolar => dolar.type === 'Dolar Oficial').sellPrice
    const dolarQatar = Number(sellOficial.replace(',','.')) + Number(sellOficial.replace(',','.')) * 1
    arrayData.push({
        type: 'Dolar Qatar',
        buyPrice: 'No Cotiza',
        sellPrice: dolarQatar.toString().replace('.',',')
    })
    const euro = allData.cotiza.cotizador.casa303
    const real = allData.cotiza.cotizador.casa304
    arrayData.push(otherChange(euro))
    arrayData.push(otherChange(real))
    return arrayData;
};

const otherChange = (money) => {
    return {
        type: money.nombre._text + ' oficial',
        buyPrice: money.compra._text,
        sellPrice: money.venta._text
    }
};

const twoDecimals = (string) => {
    if(string.toLowerCase() === 'no cotiza') return string
    const [integer, decimals] = string.split(',')
    const twoDecim = decimals.slice(0,2)
    return `${integer},${twoDecim}`
}

const getEvolution = (allData) => {
    const oficialEvolution = allData.cotiza.evolucion_dolar.oficial
    const blueEvolution = allData.cotiza.evolucion_dolar.blue
    const oficialArray = descomposition('oficial',oficialEvolution)
    const blueArray = descomposition('blue',blueEvolution)
    return [oficialArray, blueArray]
}

const descomposition = (name, objectEvolution) => {
    let countDays = 0
    let countMonths = 0
    const days = Object.values(objectEvolution.mes).map(value => {
        countDays ++
        return {
            [countDays]: Number(value._text.replace(',','.'))
        }
    })
    const months = Object.values(objectEvolution.anio).map(value => {
        countMonths ++
        return {
            [countMonths]: Number(value._text.replace(',','.'))
        }
    })
    return {
        name,
        days,
        months
    }
}

const getInflation = async () => {
    try{
        const response = await axios.get('https://api.estadisticasbcra.com/inflacion_mensual_oficial',{
            'headers':{
                'Authorization':`Bearer ${BRCA_TOKEN}`
            }
        })
        // inflacion de los ultimos 12 meses
        const inflation = response.data.slice(-12)
        // transformo en un objeto con key (mes), value (%)
        const arrangedInflation = inflation.map(month => {
            const m = month.d.split('-')[1]
            const value = month.v
            return {
                [m] : value
            }
        })
        return {
            name: 'inflacion',
            months: arrangedInflation
        }
    }
    catch(error) {
        console.log('no',error)
    }
}

const getExchanges = (allData) => {
    const exchanges = allData.cotiza.Monedas
    const arrayExchanges = []
    Object.values(exchanges).forEach(money => {
        const coin = money.nombre._text.split(' / ')[1]
        if(coin === 'Euro' || coin === 'Real' || coin === 'Peso Chileno' || coin === 'Peso Uruguayo'){
            const name = money.nombre._text.replace('ó', 'o')
            const value = twoDecimals(money.venta._text)
            arrayExchanges.push({
                name,
                value
            }) 
        }
    })
    return arrayExchanges
}

const updateDatabase = async () => {
    try{
        const allData = await getAllData()
        if (allData) {
            const dolarData = getPrices(allData)
            dolarData.forEach(async dolar => {
                const dolarDB = await Currency.findOne({ 
                    where: { 
                        type: dolar.type
                    }
                })
                dolarDB.set({
                    buyPrice: dolar.buyPrice,
                    sellPrice: dolar.sellPrice
            })
            await dolarDB.save()
            })
            const evolutionDolar = getEvolution(allData)
            const evolutionInflation = await getInflation()
            let allEvolution = evolutionDolar
            evolutionInflation && (allEvolution = [...evolutionDolar,evolutionInflation])
            allEvolution.forEach(async type => {
                const evolutionDB = await Evolution.findOne({
                    where: {
                        name: type.name
                    }
                })
                evolutionDB.set({
                    months: type.months,
                    days: type.days
                })
                await evolutionDB.save()
            })
            const exchanges = getExchanges(allData)
            exchanges.forEach(async type => {
                const exchangeDB = await Exchanges.findOne({
                    where: {
                        name: type.name
                    }
                })
                exchangeDB.set({
                    value: type.value
                })
                await exchangeDB.save()
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllCurrencies,
    updateDatabase
};