const mongoose = require('mongoose');
const Contact = require('../../server/models/Contact');

exports.handler = async (event, context) => {
  // Set up CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers };
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const { name, email, phone, message } = JSON.parse(event.body);
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Contact saved successfully' }),
      headers,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
      headers,
    };
  } finally {
    // Close the MongoDB connection
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
  }
};