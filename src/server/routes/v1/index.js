import { Router } from 'express';
import authRoutes from './Auth/index.js';
import userRoutes from './users/index.js';
import logsRoutes from './attempts-logs/index.js';
import pannelCardsRoutes from './pannel-cards/index.js';
import emailRoutes from './email/index.js';
import statsDataRoutes from './statsData/index.js';

export default class V1Route {
    constructor() {
        this.router = Router({ mergeParams: true });
        this.authRoutes = new authRoutes();
        this.userRoutes = new userRoutes();
        this.logsRoutes = new logsRoutes();
        this.pannelCardsRoutes = new pannelCardsRoutes();
        this.emailRoutes = new emailRoutes();
        this.statsDataRoutes = new statsDataRoutes();
        
        this.setupRoutes();
    }
      setupRoutes() {
        this.router.use('/login',this.authRoutes.router);
        this.router.use("/users", this.userRoutes.router);
        this.router.use("/logs",this.logsRoutes.router);
        this.router.use("/blogs", this.pannelCardsRoutes.router);
        this.router.use("/email",this.emailRoutes.router);
        this.router.use("/stats",this.statsDataRoutes.router);
    }
}