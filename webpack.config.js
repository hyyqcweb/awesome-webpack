const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtarctTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: __dirname + '/app/main.js', // 入口
	output: {
		path: __dirname + '/build', // 打包后的文件存放的地方
		filename: 'bundle-[hash].js' // 控制缓存
	},
	devtool: 'eval-source-map', // 调式bug
	devServer: {
		contentBase: './build', // 本地服务器所加载的页面所在的目录
		historyApiFallback: true, // 不跳转
		inline: true, // 实时刷新
		hot: true, // 热加载, 大名鼎鼎的 hmr
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"env", "react" // jsx
						]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					// {
					// 	loader: "css-loader" // 存在全局污染的可能
					// }
					{
						loader: "css-loader",
						options: {
							modules: true, // 指定启用css modules
							localIdentName: '[name]__[local]--[hash:base64:5]'  // 指定css的类名格式
						}
					},
					{
						loader: "postcss-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有,翻版必究!'), // plugins用法
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html",
			filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin(), // 热加载插件
		// 下面三个压缩代码
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtarctTextPlugin('style.css')
	]
}