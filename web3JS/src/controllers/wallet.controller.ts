import {walletService} from '../services/wallet.service';

class WalletController {
  public async getWallet(_req, _res) {
    const walletName = await walletService.getWallet();
    return {walletName};
  }
  public async createWallet(_req, _res) {
    const walletName = await walletService.createWallet();
    return {walletName};
  }

  public async createAccount(req, _res) {
    const {entropy, privateKey} = req.body;
    const accountData = await walletService.createAccount({entropy, privateKey});
    return accountData;
  }

  public async getAccounts(_req, _res) {
    const accounts = await walletService.getAccounts();
    return {accounts};
  }

  public async getBalance(req, _res) {
    const {address} = req.params;
    const balance = await walletService.getBalance({address});
    return {balance};
  }
};

export const walletController = new WalletController();
