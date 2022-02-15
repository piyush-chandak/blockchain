import crypto from 'crypto';

class EntropyService {
  public async generate({wordLength}) {
    const wordCount = wordLength || 12;
    const fullEntropy = wordCount * 11;
    const checksum = fullEntropy % 32;
    const initialEntropy = fullEntropy - checksum;
    const byteCount = initialEntropy / 8;
    const randomBytes = crypto.randomBytes(byteCount).toString('hex'); // Generate Initial entropy starts.
    return randomBytes;
  }
};

export const entropyService = new EntropyService();
