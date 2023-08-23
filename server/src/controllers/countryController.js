const axios = require("axios");
const {Country, Activity} = require('../db');
const { Op } = require("sequelize");


const getAllCountries = async () => {
  return await Country.findAll({
    include: Activity,
  });
}

const getNameCountry = async(name) =>{//Ir al
  const minusMayus = {
    // Se está utilizando el operador de Sequelize "Op.or", que se utiliza para combinar múltiples condiciones con una operación OR.
  [Op.or]: [
    // Se define la primera condición: búsqueda con coincidencia de mayúsculas y minúsculas
    {
      name: {//NoM -> 
        [Op.like]: `${name}%`, // Utiliza el operador "LIKE" para buscar registros cuyo "name" comience con el valor de "name" dado.
      },
    },
    // Se define la segunda condición: búsqueda sin considerar mayúsculas y minúsculas
    {
      name: {
        [Op.iLike]: `${name}%`, // Utiliza el operador "ILIKE" para buscar registros cuyo "name" comience con el valor de "name" dado, sin importar mayúsculas y minúsculas.
      },
    },
  ],

  };
  return await Country.findAll({
    where: minusMayus,
    include: Activity,
  });
}

const getIdCountry = async (idPais) =>{
  return await Country.findOne({
    where:{
      id: idPais,
    },
    include: Activity,
  })
}


module.exports = {
    getAllCountries,
    getNameCountry,
    getIdCountry
    //insertCountries
}