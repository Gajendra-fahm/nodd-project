const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Route to search by name
router.get('/search/name/:name', (req, res) => {
    const name = req.params.name;
    const result = searchController.searchByName(name);
    res.json(result);
});

// Route to search by email
router.get('/search/email/:email', (req, res) => {
    const email = req.params.email;
    const result = searchController.searchByEmail(email);
    res.json(result);
});

module.exports = router;
