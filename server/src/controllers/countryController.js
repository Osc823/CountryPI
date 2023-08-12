const axios = require("axios");
const {Country, Activity} = require('../db');
const { Op } = require("sequelize");


const getAllCountries = async () => {
  return await Country.findAll({
    include: Activity,
  });
}

const getNameCountry = async(name) =>{
  const minusMayus = {
    [Op.or]: [
      {
        name: {
          [Op.like]: `${name}%`,
        },
      },
      {
        name: {
          [Op.iLike]: `${name}%`,
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