const path = require('path');
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
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
		modules:[
			path.resolve(__dirname,"src"),
			"node_modules"
		]
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			names:['lib','manifest']
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
		new webpack.optimize.DedupePlugin()
	]
};

module.exports = config;