module.exports = {
	entry: __dirname + '/app/main.js', // 入口
	output: {
		path: __dirname + '/public', // 打包后的文件存放的地方
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map', // 调式bug
	devServer: {
		contentBase: './public', // 本地服务器所加载的页面所在的目录
		historyApiFallback: true, // 不跳转
		inline: true // 实时刷新
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
					{
						loader: "css-loader"
					}
				]
			}
		]
	}
}