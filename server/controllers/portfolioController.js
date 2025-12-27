const portfolioModel = require('../models/portfolioModel');

const getAllPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = portfolioModel.getAllPortfolioItems();
    res.json({
      success: true,
      data: portfolioItems
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getPortfolioItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolioItem = portfolioModel.getPortfolioItemById(id);
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        error: 'Portfolio item not found'
      });
    }
    
    res.json({
      success: true,
      data: portfolioItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllPortfolioItems,
  getPortfolioItemById
};

