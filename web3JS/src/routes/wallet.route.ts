import {Router} from 'express';
import {walletController} from '../controllers/wallet.controller';
import {apiResponseHandler} from '../utils/responseHandler';

const route = Router();

route.get('/', apiResponseHandler(walletController.getWallet));
route.post('/', apiResponseHandler(walletController.createWallet));

route.get('/accounts', apiResponseHandler(walletController.getAccounts));
route.post('/accounts', apiResponseHandler(walletController.createAccount));
route.get('/accounts/:address/balance', apiResponseHandler(walletController.getBalance));

export default route;
