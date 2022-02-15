import {bip39} from '../adapter/bip39';
import {CustomError} from '../utils/errorHandler';

class MnemonicService {
  public async generateMnemonic({language, wordLength}) {
    if (!language) {
      language = bip39.LANGUAGE.ENGLISH;
    }
    if (!wordLength) {
      wordLength = bip39.WORD_LENGTH[12];
    }
    const mnemonic = await bip39.generateMnemonic(language, wordLength);
    return mnemonic;
  }

  public async validateMnemonic({mnemonic}) {
    if (!mnemonic) {
      throw new CustomError('mnemonic_missing', 'Mnemonic not found');
    }
    const isValid = await bip39.validateMnemonic(mnemonic);
    return isValid;
  }

  public async getWordlists({language}) {
    if (!language) {
      language = bip39.LANGUAGE.ENGLISH;
    }
    const mnemonic = await bip39.wordlists(language);
    return mnemonic;
  }

  public async getEntropyToMnemonic({language, entropy}) {
    if (!language) {
      language = bip39.LANGUAGE.ENGLISH;
    }
    if (!entropy) {
      throw new CustomError('entropy_missing', 'Entropy not found');
    }
    const mnemonic = await bip39.entropyToMnemonic(language, entropy);
    return mnemonic;
  }

  public async getMnemonicToEntropy({language, mnemonic}) {
    if (!language) {
      language = bip39.LANGUAGE.ENGLISH;
    }
    if (!mnemonic) {
      throw new CustomError('mnemonic_missing', 'Mnemonic not found');
    }
    const entropy = await bip39.mnemonicToEntropy(language, mnemonic);
    return entropy;
  }
};

export const mnemonicService = new MnemonicService();
