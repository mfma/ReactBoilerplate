const path = require('path');
const webpack = require('webpack');


const SRC_PATH = path.resolve("src");
const DIST_PATH = path.resolve("dist");
const CONFIG_PATH = path.resolve('config');
const TEST_PATH = path.resolve('test');
const NODE_MODULES = path.resolve('node_modules');

/**
 * 配置参数
 */
let config = {
	context: SRC_PATH,
	entry: {
		app: [path.resolve(SRC_PATH, "App.js")],
		lib: [
			'react', 'react-dom', 'react-router', 'react-router-dom', 'react-router-redux', 'redux', 'react-redux', 'jquery', 'lodash'
		]
	},
	output: {
		path: DIST_PATH
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: function (path) {
					// 路径中含有 node_modules 的就不去解析。
					return !!path.match(/node_modules/);
				},
				include: [
					SRC_PATH
				],
				use: [
					{
						loader: 'babel-loader?cacheDirectory',
						options: {
							presets: ["es2015", "stage-2", "react"],
							"plugins": [
								["import",
									{
										"libraryName": "antd",
										"style": 'css'
									},
									{
										"libraryName": "antd-mobile",
										"style": 'css'
									}
								]
							]
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
			"react": path.resolve(NODE_MODULES, 'react'),
			"react-dom": path.resolve(NODE_MODULES, 'react-dom'),
			"mirrorx": path.resolve(NODE_MODULES, 'mirrorx'),
			"app": path.resolve(SRC_PATH, 'app/'),
			"config": CONFIG_PATH,
			"utils": path.resolve(SRC_PATH, 'utils/'),
			"test": TEST_PATH,
			"images":path.resolve(SRC_PATH,'img/')
		},
		modules: [
			SRC_PATH,
			NODE_MODULES
		],
		extensions: [' ', '.js', '.jsx', '.es6', '.css', '.png', '.svg', '.jpg', '.jpeg']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['lib', 'manifest'],
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