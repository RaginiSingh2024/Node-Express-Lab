const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const transactionSchema = new Schema({
  txnId: { type: String, unique: true, required: true },
  accountId: { type: String, required: true },
  type: { type: String, enum: ['Credit', 'Debit'], required: true },
  amount: { type: Number, required: true, min: 0 },
  date: { type: Date, required: true },
  status: { type: String, enum: ['SUCCESS', 'FAILED', 'PENDING'], required: true },
  channel: { type: String, required: true },
  remarks: { type: String },
  tags: [{ type: String }],
  address: { type: addressSchema, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
