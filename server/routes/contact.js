const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res, next) => {
    try {
        console.log('Received contact form submission:', req.body);
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        console.log('Contact saved successfully');
        res.json({ success: true, message: 'Contact saved successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        next(error);
    }
});

module.exports = router;
