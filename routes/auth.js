const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  res.status(200).json({ message: 'Signup successful', email });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === '123456') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
