// Importamos la parte de Express que nos permite crear rutas
const { Router } = require("express");
//Importamos las funciones para crear nuestra routes
const {getCountriesHandler, getCountriesIdHandler, getCountryNameHandler} = require('../handlers/countriesHandler')

//Declaramos una constante para ejecutar el Router
const countriesRoute = Router();

//Hacemos las rutas de nuestro Countries
//Metodo GET --> Query
countriesRoute.get("/",getCountriesHandler);
countriesRoute.get("/name",getCountryNameHandler);
 
//Metodo GET /:id --> Params
countriesRoute.get("/:idPais", getCountriesIdHandler);



//Exportamos la constante con las rutas
module.exports= countriesRoute;