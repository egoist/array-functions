var arrayFunction = require('array-function')

module.exports = function (json) {
	json = (typeof json === 'string') ? JSON.parse(json) : json
	if (!Array.isArray(json) || !json[0][0]) {
		throw new TypeError('Expect a 2d array')
	}
	return json.map(function (item) {
		return arrayFunction(item)
	})
}
