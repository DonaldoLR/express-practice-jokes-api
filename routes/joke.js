const express = require('express');
const router = express.Router();
const {
	getJokes,
	createJoke,
	getJoke,
	updateJoke,
} = require('../controllers/jokeController');

router.post('/', createJoke);
router.get('/', getJokes);
router.get('/:id', getJoke);
router.patch('/:id', updateJoke);
module.exports = router;
