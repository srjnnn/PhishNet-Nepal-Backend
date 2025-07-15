import { Router } from 'express';
import authRoutes from './Auth/index.js';
import userRoutes from './users/index.js';
export default class V1Route {
    constructor() {
        this.router = Router({ mergeParams: true });
        this.authRoutes = new authRoutes();
        this.userRoutes = new userRoutes();
        
        this.setupRoutes();
    }
      setupRoutes() {
        this.router.use('/login',this.authRoutes.router);
        this.router.use("/users", this.userRoutes.router);
    }
}