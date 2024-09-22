const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    try {
        await newContact.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error saving contact message' });
    }
});

module.exports = router;
