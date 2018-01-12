const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var promotionSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true
	},
	label: {
		type: String,
		default: ""
	},
	price: {
		type: Currency,
		min: 0,
		require: true
	},
	description: {
		type: String,
		require: true
	}
}
,{timestamps: true
	,usePushEach: true}
);

var Promotions = mongoose.model('promotion',promotionSchema);
module.exports = Promotions;