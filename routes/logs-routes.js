import express from "express";
import * as logsControllers from "../controllers/logs-controllers.js";

const router = express.Router();

//some useful possible routes for starters
router.route("/");
// .get(logsControllers.)
// .post(logsControllers.);

//some useful possible routes for starters
router.route("/:id");
// .get(logsControllers.)
// .delete(logsControllers.)
// .put(logsControllers.);

export default router;
