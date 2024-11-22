import express from "express";
import * as tipsControllers from "../controllers/tips-controllers.js";

const router = express.Router();

router.route("/").get(tipsControllers.index);

export default router;
