var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'es5-shim',
        'es5-shim/es5-sham',
        path.resolve('./src/index.js') // 项目入口
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, 
            loader: 'es3ify-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: false
            },
            mangle: {
                screw_ie8: false
            },
            output: {
                screw_ie8: false
            }
        })
    ]
};