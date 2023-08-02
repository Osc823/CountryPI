const {getAllCountries, getNameCountry, getIdCountry} = require('../controllers/countryController')

//Handler para traer todos los paises 
const getCountriesHandler = async (req, res) =>{
    try {
        const allCountries = await getAllCountries();
        res.status(200).json(allCountries);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
}

// Handler para traer por nombre
const getCountryHandler = async (req, res) => {
    let name = req.query.name;
    try {
        const countries = await getNameCountry(name);
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Handler para traer pais por id
const getCountriesIdHandler = async (req, res) => {
    //Recibimos el id por params y hacemos destructuring de id
    const {idPais} = req.params;
    try {
        const idCountry = await getIdCountry(idPais)
        res.send(idCountry);
    } catch (error) {
        //Manejamos el error 
        res.status(500).json({error: error.message});
    }
}

//Handler para crear pais
// const createCountriesHandler = (req, res) => {
//     const{name,flag, continent, capital, subregion, area, population} = req.body
//     res.status(200).send(`Pais creado ${name , flag, continent, capital, subregion, area, population}`);
// }


module.exports = {
    getCountriesHandler,
    getCountryHandler,
    getCountriesIdHandler,
}