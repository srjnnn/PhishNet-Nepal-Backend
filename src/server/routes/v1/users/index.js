import { getUsers } from "../../../controllers/users/getUsers.js";
import { Router } from "express";

class userRoutes{
constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
}
setupRoutes(){
    this.router.route("/").get(getUsers);
}
}

export default userRoutes;