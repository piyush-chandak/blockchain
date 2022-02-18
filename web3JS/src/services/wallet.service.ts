import {web3} from '../lib/web3';
import {CustomError} from '../utils/errorHandler';

class WalletService {
  public async getWallet() {
    const wallet = await web3.eth.accounts.wallet;
    return wallet.defaultKeyName;
  }

  public async createWallet() {
    const wallet = await web3.eth.accounts.wallet.create(0);
    return wallet.defaultKeyName;
  }

  public async createAccount({entropy, privateKey}) {
    let account = null;
    if (privateKey) {
      account = await web3.eth.accounts.privateKeyToAccount(privateKey);
    } else {
      account = await web3.eth.accounts.create(entropy);
    }

    await web3.eth.accounts.wallet.add(account); // Adding to wallet

    return account;
  }

  public async getAccounts() {
    const accounts = await web3.eth.getAccounts() || [];
    return accounts;
  }

  public async getBalance({address}) {
    if (!address) {
      throw new CustomError('address_missing', 'Address not found');
    }
    const balance = await web3.eth.getBalance(address);
    return balance;
  }
};

export const walletService = new WalletService();
