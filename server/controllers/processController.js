const processModel = require('../models/processModel');

const getProcessDetails = async (req, res) => {
  try {
    const processData = processModel.getProcessDetails();
    res.json({
      success: true,
      data: processData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getProcessDetails
};


