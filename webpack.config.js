var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'public/index.html' });

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '/js/',
        publicPath: "/js/",
        filename: "app.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    // plugins: [HTMLWebpackPluginConfig]

}