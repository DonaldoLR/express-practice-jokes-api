const express = require('express');
const router = express.Router();
const { getJokes, createJoke } = require('../controllers/jokeController');

router.get('/', getJokes);
router.post('/', createJoke);
module.exports = router;
