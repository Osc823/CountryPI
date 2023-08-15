const {Activity, Country} = require("../db");


const getAllActivities = async () => {
    return await Activity.findAll({
        include: Country,
    });
}

const createActivy = async (name, difficulty, duration, season) => {
    return await Activity.create({
        name, difficulty, duration, season
    });
}

const searchActivity = async (activity) => {
    return await Activity.findOne({
        where: { id: activity.id },
        include: {
          model: Country,
          through: {
            attributes: []
          }
        }
      })
}

const activityDelete = (id) => {
    Activity.destroy({
        where: {
            id: id
        }
    });
}


module.exports = {
    getAllActivities,
    createActivy,
    searchActivity ,
    activityDelete
}