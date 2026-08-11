const analyticsService = require('../services/analyticsService');

const summary = async (req, res, next) => {
  try {
    const data = await analyticsService.getSummary();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const accounts = async (req, res, next) => {
  try {
    const data = await analyticsService.getAccountsNetFlow();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const locations = async (req, res, next) => {
  try {
    const data = await analyticsService.getLocationsSummary();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

const tags = async (req, res, next) => {
  try {
    const data = await analyticsService.getTagsSummary();
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  summary,
  accounts,
  locations,
  tags,
};
