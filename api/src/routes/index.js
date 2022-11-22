const { Router } = require('express');
const { route } = require('./dolarRoute');
const dolarRoute = require('./dolarRoute');
const evolutionRoute = require('./evolutionRoute')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/dolar', dolarRoute);
// mandar por query el tipo de dolar del que se quiere la evolucion
router.use('/evolution', evolutionRoute)

module.exports = router;