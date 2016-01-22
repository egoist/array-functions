# array-functions [![NPM version](https://img.shields.io/npm/v/array-functions.svg)](https://npmjs.com/package/array-functions) [![NPM downloads](https://img.shields.io/npm/dm/array-functions.svg)](https://npmjs.com/package/array-functions) [![Build Status](https://img.shields.io/circleci/project/egoist/array-functions/master.svg)](https://circleci.com/gh/egoist/array-functions)

> Read JS functions from JSON array.

## Install

```
$ npm install --save array-functions
```

## Usage

```js
import test from 'ava'
import arrayFunctions from './'

test('main', t => {
	let json = [
		['foo', 1, 2],
		['bar', 1, 2]
	]

	json = arrayFunctions(json)

	t.same(json, [
		{
			name: 'foo',
			args: [1, 2]
		},
		{
			name: 'bar',
			args: [1, 2]
		}
	])
})
```

## Related

- [array-function](https://github.com/egoist/array-function): Like this module but return a single function

## License

MIT © [EGOIST](https://github.com/egoist)
