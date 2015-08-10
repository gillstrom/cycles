'use strict';
var inRange = require('in-range');

module.exports.sleep = function (str) {
	var arr = String(str).split(':');
	var date = new Date();
	var ret = {};

	if (arr.length > 1 && inRange(parseInt(arr[0], 10), 23) && inRange(parseInt(arr[1], 10), 59)) {
		date.setHours(arr[0], arr[1], 0);
	}

	date.setMinutes(date.getMinutes() + 90);

	for (var i = 2; i < 8; i++) {
		date.setMinutes(date.getMinutes() + 90);
		ret[i] = date.toString().match(/\d{2}:\d{2}/)[0];
	}

	return ret;
};

module.exports.wake = function (str) {
	var arr = String(str).split(':');
	var date = new Date();
	var ret = {};

	if (arr.length < 2 || !inRange(parseInt(arr[0], 10), 23) || !inRange(parseInt(arr[1], 10), 59)) {
		throw new Error('Expected a 24 hour clock string');
	}

	date.setHours(arr[0], arr[1] - 90, 0);

	for (var i = 2; i < 8; i++) {
		date.setMinutes(date.getMinutes() - 90);
		ret[i] = date.toString().match(/\d{2}:\d{2}/)[0];
	}

	return ret;
};
