import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as db from './mogoose';

// routes
import userRoute from '../routes/user.route';
import { farmerRoute } from '../routes/farmer.route';
import { paddyFieldRoutes } from '../routes/paddy-field.route';

const initAppConfigs = (app: any) => {
  // setup the body-parser configurations
  app.use(cors());
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

  // setup static resources
  // app.use('/static', app.static('public'));
}

/**
 * @desc - setup db connection and models
 */
const initDbConfigs = () => {
  // initialize the database
  db.init();

  // need to require all mongoose models here
  require("../models/farmer");
  require("../models/paddy-field");

}

const initServerRoutes = (app: any) => {
  userRoute(app);
  farmerRoute(app);
  paddyFieldRoutes(app);
}

const initErrorHandler = (app: any) => {
  // error handler, send stacktrace only during development
  app.use((err: any, req: any, res: any, next: any) => { // eslint-disable-line no-unused-vars
    console.log(err);
    const status = err.status ? err.status : 400;
    return res.status(status)
      .json({
        message: err.message,
        stack: err.stack
      });
  });
}

const init = (): any => {
  const app = express();
  
  initAppConfigs(app);
  initDbConfigs();
  initServerRoutes(app);
  initErrorHandler(app);

  return app;
}

export default init;
