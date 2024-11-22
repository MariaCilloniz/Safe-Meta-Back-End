import express from "express";
import * as resourcesControllers from "../controllers/resources-controllers.js";

const router = express.Router();

router.route("/").get(resourcesControllers.index);

export default router;
