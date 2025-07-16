import { sendEmail } from "../../../controllers/email/sendEmail.js";
import { Router } from "express";

class emailRoutes {
  constructor() {
    this.router = Router({ mergeParams: true });
    this.setupRoutes();
  }
  setupRoutes() {
    this.router.route("/").post(sendEmail);
  }
}

export default emailRoutes;
