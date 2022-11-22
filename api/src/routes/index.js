const { Router } = require('express');
const { route } = require('./dolarRoute');
const dolarRoute = require('./dolarRoute');
const evolutionRoute = require('./evolutionRoute');
const exchangesRoute = require('./exchangesRoute');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// trae un arreglo con valores de compra y venta de los tipos de dolares, euro y real
router.use('/dolar', dolarRoute);

// mandar por query el type (blue, oficial o inflacion) del que se quiere la evolucion
router.use('/evolution', evolutionRoute)

router.use('/exchanges', exchangesRoute)


module.exports = router;