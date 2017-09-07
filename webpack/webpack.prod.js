let config = require('./webpack.config');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = "/";

config.module.rules.push({
	test: /\.(scss|css)?$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: ['css-loader','postcss-loader','sass-loader']
	}),
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
		}),
	]
});