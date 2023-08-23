const { Router } = require("express");

const {
  getActivitiesHandler,
  updateActivitiesHandler,
  createActivitiesHandler,
  getActivitiesByIdHandler,
} = require("../handlers/activitiesHandler");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", createActivitiesHandler);

activitiesRouter.get("/:id", getActivitiesByIdHandler);

module.exports = activitiesRouter;


