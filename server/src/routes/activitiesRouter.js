const {Router} = require("express");
const {getActivitiesHandler,updateActivitiesHandler,createActivitiesHandler,deleteActivitiesHandler} = require('../handlers/activitiesHandler')

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", createActivitiesHandler);

activitiesRouter.delete("/:id",deleteActivitiesHandler);

activitiesRouter.put("/:id", updateActivitiesHandler)

module.exports = activitiesRouter;