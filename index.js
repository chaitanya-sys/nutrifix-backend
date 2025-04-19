const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Required to read req.body

// Mount the auth routes
app.use('/api/auth', require('./routes/auth'));

// Optional root test
app.get('/', (req, res) => {
  res.send('Nutrifix Backend is live!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
