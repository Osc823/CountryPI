const {Router} = require("express");
const {getActivitiesHandler,createActivitiesHandler,deleteActivitiesHandler} = require('../handlers/activitiesHandler')

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", createActivitiesHandler);

activitiesRouter.delete("/:name",deleteActivitiesHandler);

module.exports = activitiesRouter;