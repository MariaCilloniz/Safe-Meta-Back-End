import express from "express";
import "dotenv/config";
import cors from "cors";
import logsRoutes from "./routes/logs-routes.js";
import tipsRoutes from "./routes/tips-routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/tips", tipsRoutes);
app.use("/api/logs", logsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
