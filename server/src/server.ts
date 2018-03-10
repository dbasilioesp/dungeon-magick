import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as _ from 'lodash';
import { ObjectID } from 'mongodb';
import * as morgan from 'morgan';
import { connect, connection } from 'mongoose';

import { getConfig } from './common/provider';
import router from './routes';

export class Server {

  public express;

  constructor() {
    this.express = express();
    this.configureExpress();
    this.configureDatabase();
    this.configureRoutes();
    this.configureErrorHandler();
  }

  private configureRoutes() {
    this.express.use('/api/v1', router);
  }

  private configureExpress(): void {
    this.express.use(bodyParser.json());
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
  }

  private configureDatabase(): void {
    const config = getConfig();
    connect(config.database.url);

    const db = connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  private configureErrorHandler(): void {
    this.express.use((request, response, next) => {
      const error: any = new Error('Not Found');
      error.status = 404;
      next(error);
    });

    this.express.use((error, request, response, next) => {
      // set locals, only providing error in development
      response.locals.message = error.message;
      response.locals.error = request.app.get('env') === 'development' ? error : {};

      // render the error page
      response.status(error.status || 500);
      response.send(error.message);
    });
  }

}
