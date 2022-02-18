import Web3 from 'web3';

class Web3Wrapper {
  private WEB3_DOMAIN_URL = process.env.WEB3_DOMAIN_URL || 'HTTP://127.0.0.1:7545';
  private static instance: Web3 = null;

  constructor() { }

  public getInstance() {
    if (!Web3Wrapper.instance) {
      Web3Wrapper.instance = new Web3(Web3.givenProvider || this.WEB3_DOMAIN_URL);
    }
    return Web3Wrapper.instance;
  }
}

export const web3 = new Web3Wrapper().getInstance();
