const path = require('path');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'lib'),
        // filename: 'asd',
        filename: 'index.js',
        library: true,
        // libraryTarget: 'umd',
        libraryTarget: 'commonjs2',
        // umdNamedDefine: true
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            }
        ]
    },
    externals: nodeModules
};
