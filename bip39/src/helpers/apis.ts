export const APIS = [
  {
    method: 'GET',
    url: 'api/mnemonic/generate',
    queryParmas: [
      {name: 'language', validParams: ['english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese']},
      {name: 'wordLength', validParams: [12, 15, 18, 21, 24]},
    ],
    description: 'Generate mnemonic using bip39 lib',
  },
  {
    method: 'GET',
    url: 'api/mnemonic/validate',
    queryParmas: [
      {name: 'mnemonic', description: ['Mnemonic to be validated']},
    ],
    description: 'Validate mnemonic using bip39 lib',
  },
  {
    method: 'GET',
    url: 'api/mnemonic/wordlist',
    queryParmas: [
      {name: 'language', validParams: ['english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese']},
    ],
    description: 'Get mnemonic wordlist using bip39 lib',
  },
  {
    method: 'GET',
    url: 'api/mnemonic/entropyToMnemonic',
    queryParmas: [
      {name: 'language', validParams: ['english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese']},
      {name: 'entropy', description: ['Entropy to be converted']},
    ],
    description: 'Convert Entropy to Mnemonic wordlist using bip39 lib',
  },
  {
    method: 'GET',
    url: 'api/mnemonic/mnemonicToEntropy',
    queryParmas: [
      {name: 'language', validParams: ['english', 'japanese', 'spanish', 'italian', 'french', 'korean', 'czech', 'portuguese', 'chinese']},
      {name: 'mnemonic', description: ['Mnemonic to be converted']},
    ],
    description: 'Convert Mnemonic to Entropy wordlist using bip39 lib',
  },
  {
    method: 'GET',
    url: 'api/entropy/generate',
    queryParmas: [
      {name: 'wordLength', validParams: [12, 15, 18, 21, 24]},
    ],
    description: 'Generate random entropy',
  },
];
