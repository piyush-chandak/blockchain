import {Router} from 'express';

import {MESSAGES} from '../helpers/constants';
import {NotFoundError} from '../utils/errorHandler';
import {apiResponseHandler} from '../utils/responseHandler';

import {APIS} from '../helpers/apis';

import WalletRoute from './wallet.route';
import TransactionRoute from './transaction.route';

const route = Router();

route.get('/', (_req, res) => {
  res.send(MESSAGES.DEFAULT_TEXT);
});

route.get('/api', apiResponseHandler(() => {
  return APIS;
}),
);

route.use('/api/wallet', WalletRoute);
route.use('/api/transaction', TransactionRoute);

route.use('/', apiResponseHandler(() => {
  throw new NotFoundError();
}),
);

export default route;
