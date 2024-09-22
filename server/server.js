require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ['https://dazzling-fenglisu-9e1fe3.netlify.app', 'http://localhost:8888'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Your routes here

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

