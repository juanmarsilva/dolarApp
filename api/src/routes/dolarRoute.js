const { Router } = require('express');

const { getAllDolars } = require('../controllers/getDolar');

const router = Router();

router.get('/', getAllDolars);

module.exports = router;