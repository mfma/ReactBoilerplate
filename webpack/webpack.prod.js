const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config');

config.output = merge(config.output, {
	publicPath:"",
	filename: 'js/[name].[chunkhash].js',
	chunkFilename: 'js/[name].[chunkhash].js'
});
config.module.rules.push({
	test: /\.(scss|css)?$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: ['css-loader', 'postcss-loader', 'sass-loader']
	})
});
config.plugins.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve('index.html'),
	chunks: ['app', 'lib'],
	minify: {
		collapseWhitespace: true,
		collapseInlineTagWhitespace: true,
		removeRedundantAttributes: true,
		removeEmptyAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		removeComments: true
	}
}));
config.plugins.push(new ExtractTextPlugin({
	filename: 'style.css',
	allChunks: true,
}));

module.exports = config;
