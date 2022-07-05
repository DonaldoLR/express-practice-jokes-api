const express = require('express');
const router = express.Router();
const {
	getJokes,
	createJoke,
	getJoke,
	updateJoke,
	deleteJoke,
} = require('../controllers/jokeController');

router.post('/', createJoke);
router.get('/', getJokes);
router.get('/:id', getJoke);
router.patch('/:id', updateJoke);
router.delete('/:id', deleteJoke);
module.exports = router;
