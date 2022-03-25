const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globals = require('./src/globals.js')

module.exports = {
    mode: "development",
    devServer: {
        static: './dist',
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    devtool: 'inline-source-map',
    entry: {
        index: {
            import: './src/index.js', 
            dependOn: 'shared', 
        }, 
        another: {
            import: './src/another-module.js',
            dependOn: 'shared', 
        },
        shared: 'lodash',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
           chunks: 'all', 
        }, 
    }, 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tic Tac Toe',
            template: './src/grid.html',
            minify: true,
        }),
    ],
    module: {
        rules: [
            // JavaScript      
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,

                type: 'asset/resource',

            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};