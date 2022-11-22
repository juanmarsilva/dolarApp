const { Router } = require('express');

const { getEvolution } = require('../controllers/getEvolution');

const router = Router();

router.get('/', getEvolution);

module.exports = router;