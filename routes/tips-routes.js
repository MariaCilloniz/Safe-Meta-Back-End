import express from "express";
import * as tipsControllers from "../controllers/tips-controllers.js";

const router = express.Router();

//some useful possible routes for starters
router.route("/");
// .post(tipsControllers.)
// .get(tipsControllers.);

//some useful possible routes for starters
router.route("/:id");
// .delete(tipsControllers.)
// .put(tipsControllers.)
// .get(tipsControllers.);

export default router;
