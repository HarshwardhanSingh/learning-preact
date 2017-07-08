const path = require('path');

module.exports = {
	entry: './src',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		historyApiFallback: true
	}
}