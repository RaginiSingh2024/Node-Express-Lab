const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

const generateTxnId = () => {
  return nanoid();
};

module.exports = generateTxnId;
