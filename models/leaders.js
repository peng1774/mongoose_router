const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leaderSchema = new Schema({
	name:{
		type: String,
		required: true,
		default: ""
	},
	image:{
		type: String,
		required: true,
		default: ""
	},
	designation:{
		type: String,
		required: true,
		default: ""
	},
	abbr:{
		type: String,
		default: ""
	},
	description:{
		type: String,
		required: true,
		default: ""
	}
},{timestamp: true});

var Leaders = mongoose.model('Leader', leaderSchema);
module.exports = Leaders;
