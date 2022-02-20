const { PinoWebpackPlugin } = require('pino-webpack-plugin');

module.exports = {
	target: 'node',
	mode: 'production',
	entry: {
		app: './src/app.js',
		bridge: './src/bridge.js',
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/precompiled',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					// Use `.swcrc` to configure swc
					loader: require.resolve('swc-loader'),
				},
			},
		],
	},
	plugins: [new PinoWebpackPlugin({ transports: ['pino-pretty'] })],
	optimization: {
		minimize: false,
	},
};
