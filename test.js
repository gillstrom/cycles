'use strict';
var mocha = require('mocha');
var assert = require('assert');
var cycles = require('./');

mocha.it('Should return an object with times', function () {
	assert.strictEqual(Object.keys(cycles.sleep()).length, 6);
	assert.deepEqual(cycles.sleep('23:00'), {
		2: '02:00',
		3: '03:30',
		4: '05:00',
		5: '06:30',
		6: '08:00',
		7: '09:30'
	});

	assert.deepEqual(cycles.wake('06:00'), {
		2: '03:00',
		3: '01:30',
		4: '00:00',
		5: '22:30',
		6: '21:00',
		7: '19:30'
	});
});
