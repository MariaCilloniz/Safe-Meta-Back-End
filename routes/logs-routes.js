import express from "express";
import * as logsControllers from "../controllers/logs-controllers.js";

const router = express.Router();

router.route("/").get(logsControllers.index);

export default router;
