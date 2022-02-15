import {HTTP_STATUS} from '../helpers/constants';
import {errorHandler} from './errorHandler';

export const apiResponseHandler = (callback: any) => {
  return async (req: any, res: any) => {
    try {
      const data = await callback(req, res);
      res.status(HTTP_STATUS.OK).send({data});
    } catch (err) {
      errorHandler.handleError(err);

      const error = {
        description: err.description,
        name: err.name,
        statusCode: err.statusCode,
      };

      res.status(err.statusCode).send({error});
    }
  };
};
