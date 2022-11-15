const axios = require('axios');
const { Country } = require('../db.js');

async function LoadDb(req, res) {
	try {
		const apiUrl = axios.get('https://restcountries.com/v3/all');
		const apiInfo = await apiUrl.data.map(el => {
			return {
				id: el.cca3,
				name: el.name.common,
				flagimg: el.flags[1],
				continents: el.continents,
				//continents: el.region!= null ? el.region : "No data",
				capital: el.capital,
				region: el.region,
				subregion: el.subregion,
				area: el.area,
				population: el.population,
			};
		});

		ModelCountries.forEach( async(el) => {
			await Country.findOrCreate({
				while: {
					name: el.name,
					id: el.id,
					flagimg: el.flagimg,
					continents: el.continents,
					capital: el.capital,
					region: el.region,
					subregion: el.subregion,
					area: el.area,
					population: el.population,
				}
			})
		});
		console.log('base de datos exitosa');
	} catch (error) {
		res.send(error);
	}
} module.exports = {LoadDb}
