const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendCongratulationsEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Congratulations on Registering with Us!',
    text: `Dear ${name},\n\nThank you for registering with us. We are excited to have you on board!\n\nBest regards,\nThe Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Congratulations email sent to:', email);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
