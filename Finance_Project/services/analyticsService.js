const Transaction = require('../models/Transaction');

const getSummary = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: '$status',
        totalAmount: { $sum: '$amount' },
      },
    },
  ]);

  const summary = {
    totalCredits: 0,
    totalDebits: 0,
    totalPending: 0,
    totalFailed: 0,
  };

  for (const item of result) {
    switch (item._id) {
      case 'SUCCESS':
        // We need to sum credits and debits separately for success
        const credits = await Transaction.aggregate([
          { $match: { status: 'SUCCESS', type: 'Credit' } },
          { $group: { _id: null, total: { $sum: '$amount' } } },
        ]);
        const debits = await Transaction.aggregate([
          { $match: { status: 'SUCCESS', type: 'Debit' } },
          { $group: { _id: null, total: { $sum: '$amount' } } },
        ]);
        summary.totalCredits = credits[0]?.total || 0;
        summary.totalDebits = debits[0]?.total || 0;
        break;
      case 'PENDING':
        summary.totalPending = item.totalAmount;
        break;
      case 'FAILED':
        summary.totalFailed = item.totalAmount;
        break;
    }
  }

  return summary;
};

const getAccountsNetFlow = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: '$accountId',
        totalCredits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Credit'] }, '$amount', 0],
          },
        },
        totalDebits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Debit'] }, '$amount', 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        netFlow: { $subtract: ['$totalCredits', '$totalDebits'] },
      },
    },
  ]);
  return result;
};

const getLocationsSummary = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: { city: '$address.city', country: '$address.country' },
        totalCredits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Credit'] }, '$amount', 0],
          },
        },
        totalDebits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Debit'] }, '$amount', 0],
          },
        },
      },
    },
    {
      $project: {
        city: '$_id.city',
        country: '$_id.country',
        totalCredits: 1,
        totalDebits: 1,
        netFlow: { $subtract: ['$totalCredits', '$totalDebits'] },
        _id: 0,
      },
    },
  ]);
  return result;
};

const getTagsSummary = async () => {
  const result = await Transaction.aggregate([
    { $unwind: '$tags' },
    {
      $group: {
        _id: '$tags',
        totalCredits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Credit'] }, '$amount', 0],
          },
        },
        totalDebits: {
          $sum: {
            $cond: [{ $eq: ['$type', 'Debit'] }, '$amount', 0],
          },
        },
      },
    },
    {
      $project: {
        tag: '$_id',
        totalCredits: 1,
        totalDebits: 1,
        netFlow: { $subtract: ['$totalCredits', '$totalDebits'] },
        _id: 0,
      },
    },
  ]);
  return result;
};

module.exports = {
  getSummary,
  getAccountsNetFlow,
  getLocationsSummary,
  getTagsSummary,
};
