const solutionModel = require('../models/solutionModel');

const getAllSolutions = async (req, res) => {
  try {
    const solutions = solutionModel.getAllSolutions();
    res.json({
      success: true,
      data: solutions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getSolutionById = async (req, res) => {
  try {
    const { id } = req.params;
    const solution = solutionModel.getSolutionById(id);
    
    if (!solution) {
      return res.status(404).json({
        success: false,
        error: 'Solution not found'
      });
    }
    
    res.json({
      success: true,
      data: solution
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

const getSolutionsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const solutions = solutionModel.getSolutionsByCategory(category);
    
    res.json({
      success: true,
      data: solutions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllSolutions,
  getSolutionById,
  getSolutionsByCategory
};


