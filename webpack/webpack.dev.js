const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let WebDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

const port = 8080;
const host = 'localhost';
const publicPath = 'http://' + host + ':' + port + '/';


config.entry.app.unshift('webpack-dev-server/client?' + publicPath);
config.entry.app.unshift('webpack/hot/only-dev-server');
config.output = merge(config.output, {
	publicPath:publicPath,
	filename: 'js/[name].bundle.js',
	chunkFilename: 'js/[name].chunk.js'
});
config.module.rules[0].use.unshift({loader: "react-hot-loader", options: {presets: ["es2015"]}});
config.module.rules.push({
	test: /\.(scss|css)?$/,
	use: [
		{
			loader: 'style-loader'
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1
			}
		},
		{
			loader: 'postcss-loader'
		},
		{
			loader: 'sass-loader'
		}
	]
});
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve('index.html'),
	chunks: ['app', 'lib'],
	minify: false
}));
config.devtool = "#cheap-module-eval-source-map";

new WebDevServer(webpack(config), {
	hot: true,
	compress: true,
	inline: true,
	open: true,
	stats: {
		chunk: false,
		children: false,
		colors: true
	},
	historyApiFallback: true
}).listen(port, host, function () {
	console.log(publicPath);
});