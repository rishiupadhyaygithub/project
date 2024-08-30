const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/register', userController.registerUser);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});