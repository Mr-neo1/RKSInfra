const serviceModel = require('../models/serviceModel');

const getAllServices = async (req, res) => {
  try {
    const services = serviceModel.getAllServices();
    res.json({
      success: true,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = serviceModel.getServiceById(id);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }
    
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllServices,
  getServiceById
};

