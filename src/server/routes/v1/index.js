import { Router } from 'express';
import authRoutes from './Auth/index.js';
export default class V1Route {
    constructor() {
        this.router = Router({ mergeParams: true });
        this.authRoutes = new authRoutes();
        
        this.setupRoutes();
    }
      setupRoutes() {
        this.router.use('/login',this.authRoutes.router);
    }
}