import { Router } from 'express';
export default class V1Route {
    constructor() {
        this.router = Router({ mergeParams: true });
        
        this.setupRoutes();
    }
      setupRoutes() {
    }
}