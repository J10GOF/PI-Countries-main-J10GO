const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      //type: DataTypes.STRING,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagimg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    /*createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true
    }*/
  });
};

/*
ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población
*/
