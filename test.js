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
