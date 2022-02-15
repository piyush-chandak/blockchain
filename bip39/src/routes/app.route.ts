import {Router} from 'express';

import {MESSAGES} from '../helpers/constants';
import {NotFoundError} from '../utils/errorHandler';
import {apiResponseHandler} from '../utils/responseHandler';

import MnemonicRoute from './mnemonic.route';
import EntropyRoute from './entropy.route';
import {APIS} from '../helpers/apis';

const route = Router();

route.get('/', (_req, res) => {
  res.send(MESSAGES.DEFAULT_TEXT);
});

route.get('/api', apiResponseHandler(() => {
  return APIS;
}),
);

route.use('/api/mnemonic/', MnemonicRoute);
route.use('/api/entropy/', EntropyRoute);

route.use('/', apiResponseHandler(() => {
  throw new NotFoundError();
}),
);

export default route;
