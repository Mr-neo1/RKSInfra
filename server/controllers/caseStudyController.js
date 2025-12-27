const caseStudyModel = require('../models/caseStudyModel');

const getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = caseStudyModel.getAllCaseStudies();
    res.json({
      success: true,
      data: caseStudies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getCaseStudyById = async (req, res) => {
  try {
    const { id } = req.params;
    const caseStudy = caseStudyModel.getCaseStudyById(id);
    
    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        error: 'Case study not found'
      });
    }
    
    res.json({
      success: true,
      data: caseStudy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getCaseStudiesByIndustry = async (req, res) => {
  try {
    const { industry } = req.params;
    const caseStudies = caseStudyModel.getCaseStudiesByIndustry(industry);
    
    res.json({
      success: true,
      data: caseStudies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getCaseStudiesByService = async (req, res) => {
  try {
    const { service } = req.params;
    const caseStudies = caseStudyModel.getCaseStudiesByService(service);
    
    res.json({
      success: true,
      data: caseStudies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllCaseStudies,
  getCaseStudyById,
  getCaseStudiesByIndustry,
  getCaseStudiesByService
};


