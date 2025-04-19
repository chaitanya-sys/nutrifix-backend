const express = require('express');
const router = express.Router();

// Dummy database (for now)
const users = [];

// Signup route
router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Check if user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  // Add user to dummy database
  users.push({ email, password });

  res.status(201).json({ message: 'User signed up successfully!' });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  res.status(200).json({ message: 'Login successful!' });
});

module.exports = router;
