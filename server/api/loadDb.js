const axios = require("axios");
const {Country} = require('../src/db');

const dataLoad = async () => {
    const allCountries = await Country.findAll(); 
    try {
      if(!allCountries.length){
        const countriesApi = await axios.get('http://localhost:5000/countries');
        const countries =  countriesApi.data.map((country) => {
          return{
            id: country.cca3,
            name: country.name.common,
            image: country.flags ? country.flags.png : 'default_image_url',
            continent: country.region || 'Unknown Continent',
            capital: country.capital ? country.capital[0] : 'Unknown Capital',
            population: country.population,
            area: country.area
        }});
        await Country.bulkCreate(countries);
      }
    } catch (error) {
      console.log(error);
    }
};
module.exports = {dataLoad};