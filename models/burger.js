// HOMEWORK WEEK 14 - burger
// UT BOOT CAMP
// LOUISE K MILLER
// O.R.M. - where you write functions that takes inputs and conditions and turn them into database commands like SQL.
// Here is where you setup a model for how to interface with the database.
//

var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}

};

module.exports = burger;
