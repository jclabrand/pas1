
var path = require('path');

var serverConfig = {
	node: {
		__filename: true,
		__dirname: false
	},

	target: 'node',

	entry: {
		'index.js': './src/server/index.js',
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'
	},

	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = [ serverConfig ];
