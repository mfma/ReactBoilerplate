const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 是否开发环境
 * @type {boolean}
 */
const IS_DEV = process.env.NODE_ENV.trim() !== 'production';


const SRC_PATH = path.resolve("src");
const DIST_PATH = path.resolve("dist");
const PUBLIC_PATH = path.resolve('public');
const CONFIG_PATH = path.resolve('config');
const TEST_PATH = path.resolve('test');

/**
 * 配置参数
 */
let config = {
	context: SRC_PATH,
	entry: {
		app: [path.resolve(SRC_PATH,"index.js")]
	},
	output: {
		path: DIST_PATH,
		filename: IS_DEV ? 'js/[name].bundle.js' : 'js/test1.bundle.js',
		chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/test2.chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["es2015"]
						}
					}
				],
				
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'img/[hash].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			actions: path.resolve(SRC_PATH, 'actions'),
			app: path.resolve(SRC_PATH, 'app'),
			config: CONFIG_PATH,
			reducers: path.resolve(SRC_PATH, 'reducers'),
			utils: path.resolve(SRC_PATH, 'utils'),
			images: path.resolve(PUBLIC_PATH, 'images'),
			scripts: path.resolve(PUBLIC_PATH, 'javascripts'),
			styles: path.resolve(PUBLIC_PATH, 'stylesheets'),
			test: TEST_PATH
		},
		modules: [
			SRC_PATH,
			"node_modules"
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['lib', 'manifest']
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false
			},
			output: {
				comments: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve('index.html'),
			chunks: ['app', 'lib'],
			minify: IS_DEV ? false : {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeComments: true
			}
		}),
		function () {
			this.plugin('compilation', function (compilation) {
				compilation.plugin('html-webpack-plugin-after-emit', function (file, callback) {
					let manifest = '';
					Object.keys(compilation.assets).forEach(function (filename) {
						if (/\/?manifest.[^\/]*js$/.test(filename)) {
							manifest = '<script>' + compilation.assets[filename].source() + '</script>';
						}
					});
					if (manifest) {
						let htmlSource = file.html.source();
						htmlSource = htmlSource.replace(/(<\/head>)/, manifest + '$1');
						file.html.source = function () {
							return htmlSource;
						};
					}
					callback(null, file);
				});
			});
		}
	]
};

module.exports = config;