const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

// In-memory storage (replace with database in production)
let contacts = [];

// Initialize email transporter if email is enabled
let transporter = null;
if (process.env.ENABLE_EMAIL === 'true') {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

const saveContact = async (contactData) => {
  const contact = {
    id: contacts.length + 1,
    ...contactData
  };
  
  contacts.push(contact);
  
  // Optionally save to file for persistence
  if (process.env.SAVE_CONTACTS_TO_FILE === 'true') {
    const contactsDir = path.join(__dirname, '../data');
    try {
      await fs.mkdir(contactsDir, { recursive: true });
      await fs.writeFile(
        path.join(contactsDir, 'contacts.json'),
        JSON.stringify(contacts, null, 2)
      );
    } catch (error) {
      console.error('Error saving contact to file:', error);
    }
  }
  
  return contact;
};

const sendEmailNotification = async (contactData) => {
  if (!transporter) {
    console.log('Email not configured. Skipping email notification.');
    return;
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `New Contact Form Submission: ${contactData.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
};

module.exports = {
  saveContact,
  sendEmailNotification
};

