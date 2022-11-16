const axios = require('axios');

const getAllCurrencies = async (req, res) => {
    const dolarData = await getDolarsInfo();
    const euroData = await euroInfo();
    const realData = await realInfo();
    const allData = [...dolarData, euroData, realData];
    res.send(allData);
};

const getDolarsInfo = async () => {
    try {
        const data = await axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const allData = data.data.filter(obj => obj.casa.nombre === 'Dolar Oficial' || obj.casa.nombre === 'Dolar Blue' || obj.casa.nombre === 'Dolar Contado con Liqui' || obj.casa.nombre === 'Dolar Bolsa' || obj.casa.nombre === 'Dolar turista');
        const allInfo = allData.map(e => {
            return {
                nombre: e.casa.nombre,
                compra: e.casa.compra,
                venta: e.casa.venta,
            }
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
            name: 'Euro Oficial',
            compra: euroInfo[0].casa.compra,
            venta: euroInfo[0].casa.venta,
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
            name: 'Real Oficial',
            compra: realInfo[0].casa.compra,
            venta: realInfo[0].casa.venta,
        }
        return realPrice;
    } catch (err) {
        console.log(err);
    };
};



module.exports = {
    getAllCurrencies
};