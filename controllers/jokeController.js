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

// UPDATE

// DELETE

module.exports = {
	getJokes,
	createJoke,
};
