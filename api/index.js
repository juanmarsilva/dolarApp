require('dotenv').config();
const server = require('./src/app')
const { connexion, Currency } = require('./src/db.js');
const { PORT } = process.env
const { getAllCurrencies, updateDatabase } = require('./src/controllers/updateDB');


const update = async () => {
    const content = await Currency.findAll()
    if(content.length) {
        console.log(`Base de datos actualizada a las ${new Date().toLocaleString}`)
        updateDatabase()
    }
    else {
        console.log('Se carga la DB')
        getAllCurrencies()
    }
}

// Syncing all the models at once.
connexion.sync({ force: true, alter:true }).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`);
        // eslint-disable-line no-console
        setInterval(() => {
            update()
        }, 1000 * 60 * 60 * 2); // se deberia actualizar cada 2 horas
    });
});