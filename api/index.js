require('dotenv').config();
const server = require('./src/app')
const { connexion, Currency } = require('./src/db.js');
const { PORT } = process.env
const { getAllCurrencies, updateDatabase } = require('./src/controllers/updateDB');


const update = async () => {
    const content = await Currency.findAll()
    if(content.length) {
        const lastUpdated = content[1].updatedAt.getHours()
        const now = new Date()
        const thisHour = now.getHours()
        if(thisHour % 8 === 0 && thisHour !== lastUpdated) {
            console.log('entro al actualizador')
            console.log('thisHour', thisHour)
            console.log('lastUpdated',lastUpdated)
            updateDatabase()
        }
    }
    else {
        console.log('se carga la DB')
        getAllCurrencies()
    }
}

// Syncing all the models at once.
connexion.sync({ force: false }).then(() => {
    server.listen(PORT, async () => {
        console.log(`%s listening at ${PORT}`);
        // eslint-disable-line no-console
        await update()
    });
});