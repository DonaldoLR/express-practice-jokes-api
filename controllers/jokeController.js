const Joke = require('../models/jokeModel');
const mongoose = require('mongoose');

// CREATE
const createJoke = async (req, res) => {
	const { setup_line, punchline } = req.body;

	const newJoke = await Joke.create({ setup_line, punchline });

	if (!newJoke) {
		return res.status(500).json({ error: 'Could not create joke' });
	}

	res.status(201).json({ message: 'Joke created', newJoke });
};
// READ ALL
const getJokes = async (req, res) => {
	const jokes = await Joke.find({}).sort({ createdAt: -1 });
	res.status(200).json(jokes);
};
// READ ONE
const getJoke = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Joke was not found' });
	}

	const joke = await Joke.findById(id);

	if (!joke) {
		return res.status(400).json({ error: 'Joke was not found' });
	}

	res.status(200).json(joke);
};
// UPDATE
const updateJoke = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Joke was not found' });
	}

	const updatedJoke = await Joke.findByIdAndUpdate(id, {
		...req.body,
	});

	if (!updateJoke) {
		return res.status(500).json({ error: 'Unable to update joke' });
	}

	res.status(200).json({ message: 'Joke updated', updatedJoke });
};
// DELETE
const deleteJoke = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Joke was not found' });
	}

	const deletedJoke = await Joke.findByIdAndDelete(id);

	if (!deletedJoke) {
		return res.status(500).json({ error: 'Could not delete joke' });
	}

	res.status(200).json({ message: 'Joke deleted', deletedJoke });
};

module.exports = {
	getJokes,
	createJoke,
	getJoke,
	updateJoke,
	deleteJoke,
};
