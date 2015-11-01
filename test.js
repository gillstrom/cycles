import test from 'ava';
import fn from './';

test('Default duration', t => {
	t.is(Object.keys(fn.sleep()).length, 6);

	t.same(fn.sleep('23:00'), {
		2: '02:00',
		3: '03:30',
		4: '05:00',
		5: '06:30',
		6: '08:00',
		7: '09:30'
	});

	t.same(fn.wake('06:00'), {
		2: '03:00',
		3: '01:30',
		4: '00:00',
		5: '22:30',
		6: '21:00',
		7: '19:30'
	});

	t.end();
});

test('Set duration', t => {
	const duration = 60;

	t.is(Object.keys(fn.sleep({duration})).length, 6);

	t.same(fn.sleep('23:00', {duration}), {
		2: '01:00',
		3: '02:00',
		4: '03:00',
		5: '04:00',
		6: '05:00',
		7: '06:00'
	});

	t.same(fn.wake('06:00', {duration}), {
		2: '04:00',
		3: '03:00',
		4: '02:00',
		5: '01:00',
		6: '00:00',
		7: '23:00'
	});

	t.end();
});
