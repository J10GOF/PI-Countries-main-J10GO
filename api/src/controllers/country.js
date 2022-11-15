const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Country, Activity } = require('../db.js');

async function getAllCountry(req, res) {
	const { name } = req.query;
	try {
		if (!name) {
			const countryALL = await Country.findAll({include: Activity});
			res.send(countryALL);
		} else {
			const countryQuery = await Country.findAll({
				whare: {
					name: {
						[Op.ilike]: `%${name}%`
					},
				},
				include: Activity
			});

			if (!countryQuery[0]) {
				console.log('error');
				 return res
				 .status(404)
				 .json({
				 	error: ` no se encuentra ningun Pais con el nombre , ${name}`,
				 });
			}
			return res.send(countryQuery);
		}
	} catch (error){
		res.send(error);
	}
}

async function getCountryId(req, res) {
	try {
		const idpais = req.params.idPais.toUpperCase();
		console.log(idpais);
		const country = await Country.findOne({
			where: {
				id: idpais,
			},
			include: Activity,
		});
		return res.json(country);
	} catch (error) {
		res.send(error);
	}
}

module.exports = { getAllCountry, getCountryId };
