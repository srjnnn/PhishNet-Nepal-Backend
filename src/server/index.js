import http from 'http';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from '../utils/logger.js';
import MainRouter from './routes/index.js';



class Server {
    constructor(port, host) {
        this.app = express();
        this.port = port;
        this.host = host;
        this.httpServer = undefined;
        this.middlewareSetup();
        this.routingSetup();

        //  BIND METHODS
        this.onListening = this.onListening.bind(this);
        this.onError = this.onError.bind(this);
    }

    start() {
        this.httpServer = http.createServer(this.app);
        this.httpServer.listen(this.port);
        this.httpServer.on('error', this.onError);
        this.httpServer.on('listening', this.onListening);
    }

    middlewareSetup() {
        this.app.use(compression());

        this.app.use(helmet());

        this.app.use(cors());

        this.app.use(bodyParser.json());
    }

    routingSetup() {
        const { router } = new MainRouter();
        this.app.use('/api', router);
    }

    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof this.port === 'string' ? `Pipe ${this.port}` : `Port ${this.port}`;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    onListening() {
        logger.appStarted(this.port, this.host);
    }
}

export default Server;