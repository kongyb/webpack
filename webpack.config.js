const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /₩.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},{
			test: /\.s[ac]ss$/i,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/app.html'
	})],
	devtool: 'inline-source-map'
}