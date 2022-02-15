import express from 'express';
import bodyParser from 'body-parser';

import {errorHandler} from './utils/errorHandler';
import {logger} from './utils/logger';
import AppRoutes from './routes/app.route';
import {httpLogger} from './middleware/httpLog';

const PORT = process.env.PORT || 3000;
const DOMAIN_URL = process.env.DOMAIN_URL || 'http://localhost';

const app = express();

app.use(bodyParser.json());

app.use(httpLogger);

app.use('/', AppRoutes);

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

app.listen(PORT, () => {
  return logger.info(`Server is listening at ${DOMAIN_URL}:${PORT}`);
});
