require('dotenv').config();
const server = require('./src/app')
const { connexion, Currency } = require('./src/db.js');
const { PORT } = process.env
const { getAllCurrencies, updateDatabase } = require('./src/controllers/updateDB');


const update = async () => {
    const content = await Currency.findAll()
    if(content.length) {
        // const lastUpdated = content[3].updatedAt.getHours()
        // const now = new Date()
        // const thisHour = now.getHours()
        // if(thisHour % 8 === 0 && thisHour !== lastUpdated) {
        updateDatabase()
        // }
    }
    else {
        console.log('se carga la DB')
        getAllCurrencies()
    }
}

// Syncing all the models at once.
connexion.sync({ force: true, alter:true }).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`);
        // eslint-disable-line no-console
        update()
    });
});