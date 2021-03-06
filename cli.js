#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var cycles = require('./');

var cli = meow([
	'Usage',
	'  $ cycles',
	'  $ cycles <Bedtime>',
	'  $ cycles --wake <Time to wake up>',
	'',
	'Options',
	'  -d, --duration <Cycle duration>',
	'  -w, --wake <Time to wake up>'
], {
	string: [
		'duration',
		'wake'
	],
	alias: {
		d: 'duration',
		w: 'wake'
	}
});

var duration = parseInt(cli.flags.duration, 10) || 90;

function log(obj, str, reverse) {
	var arr = Object.keys(obj).map(function (el) {
		return '  ' + chalk.dim(el + ' cycles ') + chalk.bold(obj[el]);
	});

	if (reverse) {
		arr.reverse();
	}

	console.log(str);
	console.log(arr.join('\n'));
}

if (cli.flags.wake) {
	log(cycles.wake(cli.flags.wake, {duration: duration}), 'Fall asleep at a certain time to feel more refreshed in the morning.', true);
	process.exit();
}

log(cycles.sleep(cli.input[0] || '', {duration: duration}), 'Wake up at the end of a cycle to feel more refreshed in the morning.');
