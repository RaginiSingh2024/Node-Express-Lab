const express = require('express');
const { body, query } = require('express-validator');
const transactionController = require('../controllers/transactionController');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

// Validation rules
const createValidationRules = [
  body('accountId').notEmpty().withMessage('accountId is required'),
  body('type').isIn(['Credit', 'Debit']).withMessage('type must be Credit or Debit'),
  body('amount').isFloat({ gt: 0 }).withMessage('amount must be greater than 0'),
  body('date').isISO8601().toDate().withMessage('date must be a valid date'),
  body('status').isIn(['SUCCESS', 'FAILED', 'PENDING']).withMessage('status must be SUCCESS, FAILED or PENDING'),
  body('channel').notEmpty().withMessage('channel is required'),
  body('address.city').notEmpty().withMessage('city is required'),
  body('address.country').notEmpty().withMessage('country is required'),
];

const updateValidationRules = [
  body('type').optional().isIn(['Credit', 'Debit']).withMessage('type must be Credit or Debit'),
  body('amount').optional().isFloat({ gt: 0 }).withMessage('amount must be greater than 0'),
  body('date').optional().isISO8601().toDate().withMessage('date must be a valid date'),
  body('status').optional().isIn(['SUCCESS', 'FAILED', 'PENDING']).withMessage('status must be SUCCESS, FAILED or PENDING'),
];

// Routes
router.post('/', createValidationRules, validateRequest, transactionController.createTransaction);
router.get('/', transactionController.getTransactions);
router.get('/:id', transactionController.getTransactionById);
router.put('/:id', updateValidationRules, validateRequest, transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
