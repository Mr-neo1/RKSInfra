const homeModel = require('../models/homeModel');

const getHomeData = async (req, res) => {
  try {
    const homeData = homeModel.getHomeData();
    res.json({
      success: true,
      data: homeData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getHomeData
};

