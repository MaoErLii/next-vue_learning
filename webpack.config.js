const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]._bundle.js',
    },
    module: {
        rules: [
            {test: /\.css$/i, use: 'css-loader'},
            {
                test: /.m?js|jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({template: path.join(__dirname, 'public/index.html')})],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 8080
    }
}