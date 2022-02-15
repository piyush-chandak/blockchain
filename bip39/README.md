# Blockchain BIP-39
NodeJS API to generate and validate BIP-39 Seed/Mnemonic Phrases
## API Reference

#### Generate Mnemonic

```http
  GET /api/mnemonic/generate
```

| Parameter | Type     | Required     |Values                     |
| :-------- | :------- | :------- | :------------------------- |
| `language` | `string` | true | 'english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese' |
| `wordLength` | `number`| true | 12, 15, 18, 21, 24 |

#### Validate Mnemonic

```http
  GET /api/mnemonic/validate
```

| Parameter | Type     | Required     |Description                     |
| :-------- | :------- | :------- | :------------------------- |
| `mnemonic` | `string` | true | Mnemonic to be validated |

#### Wordlist

```http
  GET /api/mnemonic/wordlist
```

| Parameter | Type     | Required     |Values                     |
| :-------- | :------- | :------- | :------------------------- |
| `language` | `string` | true | 'english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese' |

#### Entropy to Mnemonic

```http
  GET /api/mnemonic/entropyToMnemonic
```

| Parameter | Type     | Required     |Values                     |
| :-------- | :------- | :------- | :------------------------- |
| `language` | `string` | true | 'english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese' |
| `entropy` | `string`| true | Any valid entropy |

#### Mnemonic to Entropy

```http
  GET /api/mnemonic/mnemonicToEntropy
```

| Parameter | Type     | Required     |Values                     |
| :-------- | :------- | :------- | :------------------------- |
| `language` | `string` | true | 'english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese' |
| `mnemonic` | `string`| true | Any valid mnemonic |

#### Generate Entropy

```http
  GET /api/entropy/generate
```

| Parameter | Type     | Required     |Values                     |
| :-------- | :------- | :------- | :------------------------- |
| `wordLength` | `number`| true | 12, 15, 18, 21, 24 |
