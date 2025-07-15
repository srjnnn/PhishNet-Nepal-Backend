import { addUsers } from "../../../controllers/users/addUsers.js";
import { deleteUsers } from "../../../controllers/users/deleteUsers.js";
import { editUsers } from "../../../controllers/users/editUsers.js";
import { getUsers } from "../../../controllers/users/getUsers.js";


import { Router } from "express";

class userRoutes{
constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
}
setupRoutes(){
    this.router.route("/").get(getUsers);
    this.router.route("/").post(addUsers);
    this.router.route("/:id").delete(deleteUsers);
    this.router.route("/:id").put(editUsers);
}
}

export default userRoutes;