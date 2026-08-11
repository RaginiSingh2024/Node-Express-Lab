const express = require('express');
const analyticsController = require('../controllers/analyticsController');

const router = express.Router();

router.get('/summary', analyticsController.summary);
router.get('/accounts', analyticsController.accounts);
router.get('/locations', analyticsController.locations);
router.get('/tags', analyticsController.tags);

module.exports = router;
