
import { getPannel } from "../../../controllers/pannel-cards/index.js";
import { Router } from "express";

class pannelCardsRoutes {
  constructor() {
    this.router = Router({ mergeParams: true });
    this.setupRoutes();
  }
  setupRoutes() {
    this.router.route("/").get(getPannel);
  }
}

export default pannelCardsRoutes;
