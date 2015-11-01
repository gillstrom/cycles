# cycles [![Build Status](https://travis-ci.org/gillstrom/cycles.svg?branch=master)](https://travis-ci.org/gillstrom/cycles)

> Calculate sleep cycles to wake up more refreshed.

*The human body goes through 90 minute sleep cycles during the night, and you feel more refreshed if you wake up at the end of a sleep cycle than if you wake up during a sleep cycle.*


## Install

```
$ npm install --save cycles
```


## CLI

```
$ npm install --global cycles
```
```
$ cycles --help

  Usage
    $ cycles
    $ cycles <Bedtime>
    $ cycles --wake <Time to wake up>

  Options
    -d, --duration <Cycle duration>
    -w, --wake <Time to wake up>
```


## Usage

```js
var cycles = require('cycles');

cycles.sleep('23:37');
/*
	{
		2: '02:37',
		3: '04:07',
		4: '05:37',
		5: '07:07',
		6: '08:37',
		7: '10:07'
	}
*/

cycles.wake('06:55');
/*
	{
		2: '03:55',
		3: '02:25',
		4: '00:55',
		5: '23:25',
		6: '21:55',
		7: '20:25'
	}
*/

cycles.wake('06:55', {duration: 60});
/*
	{
		2: '04:55',
		3: '03:55',
		4: '02:55',
		5: '01:55',
		6: '00:55',
		7: '23:55'
	}
*/
```


## API

### cycles.sleep([time], [opts])

#### time

Type: `string`  
Default: Current time

Returns an object with times to wake up for 2 to 7 sleep cycles.

#### opts

Type: `object`

Options to pass to the function

##### opts.duration

Type: `number`  
Default: `90`

Set the cycle duration.

### cycles.wake(times, [opts])

#### time

*Required*  
Type: `string`

Returns an object with times to fall asleep for 2 to 7 sleep cycles.

#### opts

Type: `object`

Options to pass to the function

##### opts.duration

Type: `number`  
Default: `90`

Set the cycle duration.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
