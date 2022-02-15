import {Router} from 'express';
import {mnemonicControler} from '../controllers/mnemonic.controller';
import {apiResponseHandler} from '../utils/responseHandler';

const route = Router();

route.get('/generate', apiResponseHandler(mnemonicControler.generate));
route.get('/validate', apiResponseHandler(mnemonicControler.validateMnemonic));
route.get('/wordlist', apiResponseHandler(mnemonicControler.wordlist));
route.get('/entropyToMnemonic', apiResponseHandler(mnemonicControler.entropyToMnemonic));
route.get('/mnemonicToEntropy', apiResponseHandler(mnemonicControler.mnemonicToEntropy));

export default route;
