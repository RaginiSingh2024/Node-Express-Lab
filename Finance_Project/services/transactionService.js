const Transaction = require('../models/Transaction');

const createTransaction = async (data) => {
  const transaction = new Transaction(data);
  return await transaction.save();
};

const getTransactions = async (filters, options) => {
  const query = {};

  if (filters.accountId) query.accountId = filters.accountId;
  if (filters.type) query.type = filters.type;
  if (filters.status) query.status = filters.status;
  if (filters.tags) query.tags = { $in: filters.tags.split(',') };
  if (filters.city) query['address.city'] = filters.city;
  if (filters.country) query['address.country'] = filters.country;

  const page = parseInt(options.page) || 1;
  const limit = parseInt(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sort = {};
  if (options.sortBy && options.order) {
    sort[options.sortBy] = options.order.toLowerCase() === 'desc' ? -1 : 1;
  } else {
    sort.date = -1; // default sort by date descending
  }

  const transactions = await Transaction.find(query).sort(sort).skip(skip).limit(limit);
  const total = await Transaction.countDocuments(query);

  return { transactions, total, page, pages: Math.ceil(total / limit) };
};

const getTransactionById = async (id) => {
  return await Transaction.findById(id);
};

const updateTransaction = async (id, data) => {
  const transaction = await Transaction.findById(id);
  if (!transaction) return null;

  // Special case for status update
  if (transaction.status === 'PENDING' && data.status && ['SUCCESS', 'FAILED'].includes(data.status)) {
    transaction.status = data.status;
  } else {
    // Update other fields
    for (const key in data) {
      if (key !== 'txnId' && key !== 'status') {
        transaction[key] = data[key];
      }
    }
  }

  return await transaction.save();
};

const deleteTransaction = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
