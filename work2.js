const emailService = require('../services/emailService');

exports.registerUser = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    // Here you would typically save the user to a database
    // Simulating successful registration
    const user = { name, email };

    // Send congratulatory email
    await emailService.sendCongratulationsEmail(user.email, user.name);

    return res.status(201).json({ message: 'User registered successfully and email sent.' });
  } catch (error) {
    console.error('Error registering user or sending email:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
