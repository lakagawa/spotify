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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i, 
            //     loader: "file-loader?name=/public/assets/[name].[ext]"
            // },
            {
                test: /\.(png|jpg)$/,
                use: {
                  loader: "url-loader"
                },
              },
        ]
    },
    // plugins: [HTMLWebpackPluginConfig]

}