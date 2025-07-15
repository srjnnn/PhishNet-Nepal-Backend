import { addUsers } from "../../../controllers/users/addUsers.js";
import { getUsers } from "../../../controllers/users/getUsers.js";

import { Router } from "express";

class userRoutes{
constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
}
setupRoutes(){
    this.router.route("/").get(getUsers);
    this.router.route("/").post(addUsers)
}
}

export default userRoutes;