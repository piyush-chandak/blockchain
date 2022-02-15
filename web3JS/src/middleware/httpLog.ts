import {logger} from '../utils/logger';

export const httpLogger = (req, res, next) => {
  const currentDateTime = new Date();
  const formattedDate = currentDateTime.toUTCString();
  const method = req.method;
  const url = req.url;
  const status = res.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

  const log = `[${formattedDate}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;

  logger.log(log);
  next();
};

const getActualRequestDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9; //  convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};
