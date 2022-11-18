const axios = require('axios');
const { Currency } = require('../db');

const getAllCurrencies = async (req, res) => {
    const dolarData = await getDolarsInfo();
    const euroData = await euroInfo();
    const realData = await realInfo();
    const allData = [...dolarData, euroData, realData];
    await Currency.bulkCreate(allData)
};

const getDolarsInfo = async () => {
    try {
        const data = await axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const allData = data.data.filter(obj => obj.casa.nombre === 'Dolar Oficial' || obj.casa.nombre === 'Dolar Blue' || obj.casa.nombre === 'Dolar Contado con Liqui' || obj.casa.nombre === 'Dolar Bolsa' || obj.casa.nombre === 'Dolar turista');
        const allInfo = allData.map(e => {
            return {
                type: e.casa.nombre,
                buyPrice: e.casa.compra,
                sellPrice: e.casa.venta,
            }
        })
        const sellOficial = allInfo.find(dolar => dolar.type === 'Dolar Oficial').sellPrice
        const dolarQatar = Number(sellOficial.replace(',','.')) + Number(sellOficial.replace(',','.')) * 1
        allInfo.push({
            type: 'Dolar Qatar',
            buyPrice: 'No Cotiza',
            sellPrice: dolarQatar
        })
        return allInfo;
    } catch (err) {
        console.log(err);
    };
};

const euroInfo = async () => {
    try {
        const data = await axios('https://www.dolarsi.com/api/api.php?type=euro');
        const euroInfo = data.data.filter(obj => obj.casa.nombre === 'Banco Nación');
        const euroPrice = {
            type: 'Euro Oficial',
            buyPrice: euroInfo[0].casa.compra,
            sellPrice: euroInfo[0].casa.venta,
        }
        return euroPrice;
    } catch (err) {
        console.log(err);
    };
};

const realInfo = async () => {
    try {
        const data = await axios('https://www.dolarsi.com/api/api.php?type=real');
        const realInfo = data.data.filter(obj => obj.casa.nombre === 'Banco Nación');
        const realPrice = {
            type: 'Real Oficial',
            buyPrice: realInfo[0].casa.compra,
            sellPrice: realInfo[0].casa.venta,
        }
        return realPrice;
    } catch (err) {
        console.log(err);
    };
};



module.exports = {
    getAllCurrencies
};