// Importamos la parte de Express que nos permite crear rutas
const { Router } = require("express");

// Importamos las rutas específicas para países y actividades desde otros archivos
const countriesRoute = require('./countriesRouter');
const activitiesRouter = require('./activitiesRouter');

// Creamos una nueva ruta principal utilizando Express
const router = Router();

//Rutas para redireccionar
router.use('/countries', countriesRoute);
router.use('/activities', activitiesRouter);

// Exportamos nuestra ruta principal para que pueda ser utilizada en otras partes del código
module.exports = router;
