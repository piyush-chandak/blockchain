import {transactionService} from '../services/transaction.service';

class TransactionController {
  public async getTransaction(req, _res) {
    const {transactionHash} = req.params;
    const transaction = await transactionService.getTransaction({transactionHash});
    return {transaction};
  }

  public async getPendingTransactions(req, _res) {
    const transactions = await transactionService.getPendingTransactions();
    return {transactions};
  }

  public async getTransactionReceipt(req, _res) {
    const {transactionHash} = req.params;
    const receipt = await transactionService.getTransactionReceipt({transactionHash});
    return {receipt};
  }

  public async createTransaction(req, _res) {
    const {sender, receiver, valueInWei, contract, gasAmount, gasPriceInWei} = req.body;
    const transaction = await transactionService.createTransaction({sender, receiver, valueInWei, contract, gasAmount, gasPriceInWei});
    return {transaction};
  }
};

export const transactionController = new TransactionController();
