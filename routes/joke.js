const express = require('express');
const router = express.Router();
const {
	getJokes,
	createJoke,
	getJoke,
} = require('../controllers/jokeController');

router.post('/', createJoke);
router.get('/', getJokes);
router.get('/:id', getJoke);
module.exports = router;
