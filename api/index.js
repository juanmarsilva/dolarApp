const server = require('./src/app')
const { connexion } = require('./src/db.js');
const { PORT } = process.env


// Syncing all the models at once.
connexion.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`);
        // eslint-disable-line no-console
    });
});