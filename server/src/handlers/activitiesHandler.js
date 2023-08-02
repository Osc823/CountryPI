const {createActivy, getAllActivities, searchActivity} = require("../controllers/activityController");
const {Activity, Country} = require("../db")

const getActivitiesHandler = async (req, res) => {
    try {
        const allActivities = await getAllActivities();
        res.status(200).json(allActivities);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
///

const createActivitiesHandler = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
    try {
    if (!name || !difficulty || !duration || !season || !countries) res.status(400).send("Faltan datos!");

    const activity = await createActivy(name, difficulty, duration, season)
    await activity.setCountries(countries);

    const cratedActivity = await searchActivity(activity)
    res.status(200).json({ msg: "Actividad creada con éxito!", cratedActivity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    // try {
    //     if (!name || !difficulty || !duration || !season) {
    //         res.status(400).send('Datos incompletos')
    //     }
    //     const activityCreated = await createActivy(name, difficulty, duration, season);
    //     await activityCreated.setCountries(countries);

    //     const 

        
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
    // res.status(200).send(`Actividad creada ${name, difficulty, duration, season}`)
}

module.exports = {
    getActivitiesHandler,
    createActivitiesHandler
}