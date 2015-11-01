import test from 'ava';
import fn from './';

test('Should return an object with times', t => {
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
