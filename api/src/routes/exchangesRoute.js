const { Router } = require('express');
const { getExchanges } = require('../controllers/getExchanges');
const router = Router();

router.use('/', getExchanges);

module.exports = router;