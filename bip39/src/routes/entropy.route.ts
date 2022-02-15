import {Router} from 'express';
import {entropyControler} from '../controllers/entropy.controller';
import {apiResponseHandler} from '../utils/responseHandler';

const route = Router();

route.get('/generate', apiResponseHandler(entropyControler.generate));

export default route;
