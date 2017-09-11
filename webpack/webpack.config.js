const path = require('path');
const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 是否开发环境
 * @type {boolean}
 */
const IS_DEV = process.env.NODE_ENV.trim() !== 'production';


/**
 * 配置参数
 */
let config = {
	context: path.resolve(__dirname, "src"),
	entry: {
		app: path.resolve(__dirname, "/src/index.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: IS_DEV ? 'js/[name].bundle.js' : 'js/[name].[chunkhash].bundle.js',
		chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/[name].[chunkhash].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: [
					"node_modules"
				],
				use: [
					{
						loader: 'babel-loader'
					}
				],
				options: {
					presets: ["es2015"]
				}
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
			actions: path.resolve(__dirname, 'src/actions'),
			app: path.resolve(__dirname, 'src/app'),
			config: path.resolve(__dirname, 'config'),
			reducers: path.resolve(__dirname, 'src/reducers'),
			utils: path.resolve(__dirname, 'src/utils'),
			images: path.resolve(__dirname, 'public/images'),
			scripts: path.resolve(__dirname, 'public/javascripts'),
			styles: path.resolve(__dirname, 'public/stylesheets'),
			test: path.resolve(__dirname, 'test')
		},
		modules: [
			path.resolve(__dirname, "src"),
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
		new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
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