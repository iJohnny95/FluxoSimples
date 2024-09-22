require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://dazzling-fenglisu-9e1fe3.netlify.app', 'http://localhost:3000', 'http://localhost:8888'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files from the public directory
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

