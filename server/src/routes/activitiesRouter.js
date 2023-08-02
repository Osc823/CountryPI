const {Router} = require("express");
const {getActivitiesHandler,createActivitiesHandler} = require('../handlers/activitiesHandler')

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", createActivitiesHandler);

module.exports = activitiesRouter;