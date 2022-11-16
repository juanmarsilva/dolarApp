const { Router } = require('express');

const { getAllCurrencies } = require('../controllers/allControllers');

const router = Router();

router.get('/', getAllCurrencies);

module.exports = router;