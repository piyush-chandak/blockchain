import {CustomError} from '../utils/errorHandler';

const bip39Plugin = require('bip39');

class Bip39 {
  public LANGUAGE = {
    ENGLISH: 'english',
    JAPANESE: 'japanese',
    SPANISH: 'spanish',
    ITILIAN: 'italian',
    FRENCH: 'french',
    KOREAN: 'korean',
    CZECH: 'czech',
    PORTUGUESE: 'portuguese',
    CHINESE: 'chinese_traditional',
  };

  public WORD_LENGTH = {
    12: 12,
    15: 15,
    18: 18,
    21: 21,
    24: 24,
  };

  public async generateMnemonic(language, wordLength) {
    this.checkForValidWordLength(wordLength);
    this.setLanguage(language);
    try {
      const mnemonic = bip39Plugin.generateMnemonic();
      return mnemonic;
    } catch (error) {
      throw new CustomError(error.message, error.stack);
    }
  }

  public async validateMnemonic(mnemonic) {
    try {
      const isValid = bip39.validateMnemonic(mnemonic);
      return isValid;
    } catch (error) {
      throw new CustomError(error.message, error.stack);
    }
  }

  public async wordlists(language) {
    try {
      const wordlists = bip39Plugin.wordlists[this.getLanguage(language)];
      return wordlists;
    } catch (error) {
      throw new CustomError(error.message, error.stack);
    }
  }

  public async entropyToMnemonic(language, entropy) {
    this.setLanguage(language);
    try {
      const mnemonic = bip39Plugin.entropyToMnemonic(entropy);
      return mnemonic;
    } catch (error) {
      throw new CustomError(error.message, error.stack);
    }
  }

  public async mnemonicToEntropy(language, mnemonic) {
    this.setLanguage(language);
    try {
      const entropy = bip39Plugin.mnemonicToEntropy(mnemonic);
      return entropy;
    } catch (error) {
      throw new CustomError(error.message, error.stack);
    }
  }

  // Private Methods
  private checkForValidLanguage(language) {
    if (!this.LANGUAGE[language?.toUpperCase()]) {
      throw new CustomError('language_not_found', 'Language not found');
    }
  }

  private checkForValidWordLength(wordLength) {
    if (!this.WORD_LENGTH[wordLength]) {
      throw new CustomError('word_legth_not_found', 'Word length not found');
    }
  }

  private getLanguage(language) {
    this.checkForValidLanguage(language);
    return this.LANGUAGE[language?.toUpperCase()];
  }

  private setLanguage(language) {
    bip39Plugin.setDefaultWordlist(this.getLanguage(language));
  }
}

export const bip39 = new Bip39();
