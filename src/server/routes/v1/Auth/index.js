import { handleLogin } from "../../../controllers/Auth/index.js";
import { Router } from "express";

class authRoutes{
   constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
   }

   setupRoutes(){
    this.router.route('/').post(handleLogin);
   }
}
export default authRoutes;