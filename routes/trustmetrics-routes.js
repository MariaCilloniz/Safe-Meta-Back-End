import express from "express";
import { getTrustMetrics } from "../controllers/trustmetrics-controllers.js";

const router = express.Router();

router.get("/", getTrustMetrics);

export default router;