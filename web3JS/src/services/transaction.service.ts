import {web3} from '../lib/web3';
import {CustomError} from '../utils/errorHandler';

class TransactionService {
  public async getTransaction({transactionHash}) {
    if (!transactionHash) {
      throw new CustomError('transaction_hash_missing', 'Transaction Hash not found');
    }
    const transaction = await web3.eth.getTransaction(transactionHash);
    return transaction;
  }

  public async getPendingTransactions() {
    const transactions = await web3.eth.getPendingTransactions();
    return transactions;
  }

  public async getTransactionReceipt({transactionHash}) {
    if (!transactionHash) {
      throw new CustomError('transaction_hash_missing', 'Transaction Hash not found');
    }
    const receipt = await web3.eth.getTransactionReceipt(transactionHash);
    return receipt;
  }

  public async createTransaction({sender, receiver, valueInWei, contract, gasAmount, gasPriceInWei}) {
    if (!sender) {
      throw new CustomError('sender_missing', 'Sender not found');
    }
    if (!receiver) {
      throw new CustomError('receiver_missing', 'Receiver not found');
    }
    const transactionDetail = {
      from: sender,
      to: receiver,
      data: contract,
      value: valueInWei,
      gas: gasAmount,
      gasPrice: gasPriceInWei,
    };
    const transaction = await web3.eth.sendTransaction(transactionDetail);
    return transaction;
  }
};

export const transactionService = new TransactionService();
