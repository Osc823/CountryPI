const {
  createActivy,
  getAllActivities,
  searchActivity,
} = require("../controllers/activityController");
const { Activity, Country } = require("../db");

//Handler para traer todas las actividades
const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Handler para traer actividad por id
const getActivitiesByIdHandler = async(req, res) => {
  const {id} = req.params
  try {
    const activityId = await Activity.findOne({where: { id },
      include: [
          {
              model: Country,
              attributes: ['id'], // Aquí especificamos los atributos que queremos incluir
          },
      ],})
    res.status(200).json(activityId);
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
}
//Handler para crear activdad
const createActivitiesHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !countries)
      res.status(400).send("Faltan datos!");

    const activity = await createActivy(name, difficulty, duration, season);
    await activity.setCountries(countries);

    const cratedActivity = await searchActivity(activity);
    res.status(201).json({ msg: "Actividad creada", cratedActivity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = {
  getActivitiesHandler,
  createActivitiesHandler,
  getActivitiesByIdHandler
};




























// const updateActivitiesHandler = async (req, res) => {
//   const { id } = req.params;
//   const { name, difficulty, duration, season, countries } = req.body;
//   try {
//     const response = await Activity.update(
//       { name, difficulty, duration, season, countries },
//       { where: { id: id } }
//     );

//     res.status(200).json({ msg: "Actividad actualizada con éxito!", response });
//   } catch (error) {
//     res.status(500).json({ error: "Error al editar la actividad" });
//   }
// };