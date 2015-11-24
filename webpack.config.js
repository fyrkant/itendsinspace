var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader',
                                'css-loader!autoprefixer-loader!sass-loader')
            }
        ]
    }
};
