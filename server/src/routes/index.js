//Hacemos la llamada mediante destructuring de express a Router
const { Router } = require("express");
//Importamos las rutas
const countriesRoute = require('./countriesRouter');
const activitiesRouter = require('./activitiesRouter');

//Declaramos una constante para ejecutar el Router
const router = Router();

//Usamos el metodo .use para redigir a la ruta
router.use('/countries', countriesRoute);
router.use('/activities', activitiesRouter);

module.exports = router;
