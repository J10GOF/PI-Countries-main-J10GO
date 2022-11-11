const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
	const apiUrl = axios.get('https://restcountries.com/v3/all');
	const apiInfo = await apiUrl.data.map(el => {
		return {
			name: el.name,
			flagimg: el.flags,
			continents: el.continents,
			capital: el.capital,
			region: el.region,
			subregion: el.subregion,
			area: el.area,
			population: el.population,
		};
	});
	return apiInfo;
};

const getDbInfo = async () => {
	return await Country.findAll({
		include: {
			model: Activitiy,
			attributes: ['name'],
			through: {
				attributes:[],
			},
		}
	});
};


module.exports = router;
