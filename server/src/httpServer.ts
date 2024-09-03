import express from 'express';
import http from 'http';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

import logger from './middlewares/logger';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(routes);

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource could not be found.',
  });
});

const server = http.createServer(app);

export { app, server };