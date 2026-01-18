import express, { Application } from 'express';
import pingRouter from './routes/ping';

export const createApp = (): Application => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use('/ping', pingRouter);

  return app;
};
