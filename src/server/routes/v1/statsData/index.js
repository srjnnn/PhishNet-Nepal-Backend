
import { getStatsData } from "../../../controllers/statsData/index.js";
import { Router } from "express";

class statsDataRoutes {
  constructor() {
    this.router = Router({ mergeParams: true });
    this.setupRoutes();
  }
  setupRoutes() {
    this.router.route("/").get(getStatsData);
  }
}

export default statsDataRoutes;
