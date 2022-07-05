const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jokesSchema = new Schema(
	{
		setup_line: {
			type: String,
			required: true,
		},
		punchline: {
			type: String,
			rquired: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Joke', jokesSchema);
