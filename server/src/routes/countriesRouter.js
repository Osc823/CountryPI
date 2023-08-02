//Hacemos la llamada mediante destructuring de express a Router
const { Router } = require("express");
//Importamos las funciones para crear nuestra routes
const {getCountriesHandler, getCountriesIdHandler, getCountryHandler} = require('../handlers/countriesHandler')

//Declaramos una constante para ejecutar el Router
const countriesRoute = Router();

//Hacemos las rutas de nuestro Countries
//Metodo GET --> Query
countriesRoute.get("/",getCountriesHandler);
countriesRoute.get("/name",getCountryHandler);
 
//Metodo GET /:id --> Params
countriesRoute.get("/:idPais", getCountriesIdHandler);

//Metodo POST

//countriesRoute.post("/", createCountriesHandler);


//Exportamos la constante con las rutas
module.exports= countriesRoute;