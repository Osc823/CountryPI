const {Activity, Country} = require("../db");


const getAllActivities = async () => {
    return await Activity.findAll({
        include: Country,
    });
}

const createActivy = async (name, difficulty, duration, season) => {
                          // |Metodo de sequelize que nos permite realizar la creacion                 
    return await Activity.create({
        name, difficulty, duration, season
    });
}

const searchActivity = async (activity) => {
    return await Activity.findOne({
        where: { id: activity.id },
        include: {
          model: Country, /*Los modelos en Sequelize son clases que representan las tablas de la base de datos y proporcionan una forma más sencilla de interactuar con los datos. */
          through: {
            attributes: []
          }
        }
      })
}



module.exports = {
    getAllActivities,
    createActivy,
    searchActivity ,
}











