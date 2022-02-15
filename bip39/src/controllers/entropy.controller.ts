import {entropyService} from '../services/entropy.service';
class EntropyControler {
  public async generate(req, _res) {
    const {wordLength} = req.query;
    const data = entropyService.generate({wordLength});
    return data;
  }
};

export const entropyControler = new EntropyControler();
