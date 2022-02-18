# Blockchain Web3JS
NodeJS API to integrate Web3JS

## API Reference

#### Get Wallet Name

```http
  GET /api/wallet
```

#### Create Wallet

```http
  POST /api/wallet
```

#### Get Account on network

```http
  GET /api/wallet/accounts
```

#### Create Account on network

```http
  POST /api/wallet/accounts
```

| Parameter | Type     | Required     | Description                     |
| :-------- | :------- | :------- | :------------------------- |
| `entropy` | `String` | false | A 32 Digit valid entropy |
| `privateKey` | `String`| false | Private Hash which can use to create account  |

#### Get balance for specific account by passing account address

```http
  GET /api/wallet/accounts/:address/balance
```

#### Get detail of transaction

```http
  GET /api/transaction/:transactionHash
```

#### Get receipt of transaction

```http
  GET /api/transaction/:transactionHash/receipt
```

#### Get all pending transactions

```http
  GET /api/transaction/pendingTransactions
```

#### Create transaction

```http
  POST /api/transaction/create
```
| Parameter | Type     | Required     | Description                     |
| :-------- | :------- | :------- | :------------------------- |
| `sender` | `String` | true | Sender public address from which ether to send |
| `receiver` | `String`| true | Receiver public address to which ether will receive  |
| `valueInWei` | `Number|String|BN|BigNumber`| false | The value transferred for the transaction in wei  |
| `contract` | `String`| false | The data of the function call on a contract  |
| `gasAmount` | `Number`| false | The amount of gas to use for the transaction  |
| `gasPriceInWei` | `Number|String|BN|BigNumber`| false | The price of gas for this transaction in wei  |
