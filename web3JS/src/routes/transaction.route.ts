import {Router} from 'express';
import {transactionController} from '../controllers/transaction.controller';
import {apiResponseHandler} from '../utils/responseHandler';

const route = Router();

route.get('/:transactionHash', apiResponseHandler(transactionController.getTransaction));
route.get('/:transactionHash/receipt', apiResponseHandler(transactionController.getTransactionReceipt));
route.get('/pendingTransactions', apiResponseHandler(transactionController.getPendingTransactions));
route.post('/create', apiResponseHandler(transactionController.createTransaction));

export default route;
