import { Router } from "express";
import { getLogs } from "../../../controllers/attempt-logs/index.js";

class logsRoutes{
constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
}
setupRoutes(){
    this.router.route("/").get(getLogs);
}
}

export default logsRoutes;