import {mnemonicService} from '../services/mnemonic.service';

class MnemonicControler {
  public async generate(req, _res) {
    const {language, wordLength} = req.query;
    const mnemonic = mnemonicService.generateMnemonic({language, wordLength});
    return mnemonic;
  }

  public async validateMnemonic(req, _res) {
    const {mnemonic} = req.query;
    const response = mnemonicService.validateMnemonic({mnemonic});
    return response;
  }

  public async wordlist(req, _res) {
    const {language} = req.query;
    const wordlist = mnemonicService.getWordlists({language});
    return wordlist;
  }

  public async entropyToMnemonic(req, _res) {
    const {language, entropy} = req.query;
    const mnemonic = mnemonicService.getEntropyToMnemonic({language, entropy});
    return mnemonic;
  }

  public async mnemonicToEntropy(req, _res) {
    const {language, mnemonic} = req.query;
    const entropy = mnemonicService.getMnemonicToEntropy({language, mnemonic});
    return entropy;
  }
};

export const mnemonicControler = new MnemonicControler();
