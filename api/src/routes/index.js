const { Router } = require('express');
const dolarRoute = require('./dolarRoute');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/dolar', dolarRoute);

module.exports = router;