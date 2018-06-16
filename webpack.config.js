const path = require('path');
const webpack = require('webpack');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'final-form-material-ui.min.js',
		library: 'final-form-material-ui',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {cacheDirectory: true},
					},
				],
				include: [
					path.resolve(__dirname, 'src'),
				],
			},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],
	resolve: {extensions: ['.js', '.jsx']},
	externals: [
		/^@material-ui/,
		'react',
	],
};

module.exports = config;
