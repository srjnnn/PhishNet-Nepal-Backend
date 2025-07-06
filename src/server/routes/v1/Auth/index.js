import { handleLogin } from "../../../controllers/Auth/index.js";
import { Router } from "express";
import { validateToken } from "../../../controllers/Auth/validateToken.js";
import { refreshTokenHandler } from "../../../controllers/Auth/accessTokenHandler.js";

class authRoutes{
   constructor(){
    this.router = Router({mergeParams : true});
    this.setupRoutes();
   }

   setupRoutes(){
    this.router.route('/').post(handleLogin);
    this.router.route('/validate').post(validateToken);
    this.router.route('/renew').post(refreshTokenHandler);
   }
}
export default authRoutes;