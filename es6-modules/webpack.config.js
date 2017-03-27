const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // uglify js
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false},
            sourceMap: true
        }),
        // env plugin
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
        })
    ]
};
