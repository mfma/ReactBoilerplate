const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = require('./webpack.config');

config.output = merge(config.output, {
	publicPath: "/test/",
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
config.plugins.push(new CleanWebpackPlugin(['dist']));
config.plugins.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve('index.html'),
	inject: true,
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
	filename: 'css/[name].[contenthash].css'
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false,
		drop_console: false
	},
	output: {
		comments: false
	}
}));
config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': JSON.stringify('production')
	}
}));

module.exports = config;
