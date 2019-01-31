const path = require('path');
const webpack = require('webpack');

const config = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'public/js/dist.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9999
    },
    watch: true,
    devtool:'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'development'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};

module.exports = config;