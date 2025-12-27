const { validationResult } = require('express-validator');
const contactModel = require('../models/contactModel');

const submitContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, phone, message, subject } = req.body;
    
    // Save contact submission
    const result = await contactModel.saveContact({
      name,
      email,
      phone: phone || null,
      message,
      subject: subject || 'General Inquiry',
      createdAt: new Date()
    });

    // Send email notification (if configured)
    if (process.env.ENABLE_EMAIL === 'true') {
      await contactModel.sendEmailNotification({
        name,
        email,
        phone,
        message,
        subject: subject || 'General Inquiry'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: result
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form. Please try again later.'
    });
  }
};

module.exports = {
  submitContact
};

