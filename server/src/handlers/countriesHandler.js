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
const getCountryNameHandler = async (req, res) => {
    let {name} = req.query;
    console.log('Query',req.query);
    try {
        const countries = await getNameCountry(name);
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({error: "Pais no encontrado con ese nombre"});
    }
}

//Handler para traer pais por id
const getCountriesIdHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
        if (idPais.length <= 3) {
            const idCountry = await getIdCountry(idPais);
            res.status(200).send(idCountry);
        } else {
            // Si el ID del país es más largo de lo esperado
            res.status(402).json({ error: 'Invalid country ID' });
        }
    } catch (error) {
        // Manejo de errores genérico para cualquier otro error
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    getCountriesHandler,
    getCountryNameHandler,
    getCountriesIdHandler,
}