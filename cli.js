#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var cycles = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ cycles',
		'  $ cycles <Bedtime>',
		'  $ cycles --wake <Time to wake up>',
		'',
		'Options',
		'  -w, --wake <Time to wake up>'
	]
}, {
	string: [
		'wake'
	],
	alias: {
		w: 'wake'
	}
});

function sleep(obj, str, reverse) {
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
	sleep(cycles.wake(cli.flags.wake), 'Fall asleep at the end of a cycle to feel more refreshed in the morning.', true);
	return;
}

sleep(cycles.sleep(cli.input[0] || ''), 'Wake up at the end of a cycle to feel more refreshed in the morning.');
