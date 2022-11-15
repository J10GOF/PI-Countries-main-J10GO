const { Router } = require('express');
const { getAllCountry, getCountryId } = require('../controllers/country.js');
const router = Router();

router.get('/', getAllCountry)
router.get('/:idPais', getCountryId)

module.exports = router;