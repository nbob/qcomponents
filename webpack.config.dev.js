const path = require('path');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

module.exports = {
    // devtool: 'source-map',
    // entry: {
    //     // 'index': "./src/index.js",
    //     'Tabs': "./src/components/Tabs/index.jsx",
    // },
    output: {
        // path: path.join(__dirname, 'lib'),
        // filename: 'asd',
        // filename: '[name].js',
        // library: true,
        // libraryTarget: 'umd',
        libraryTarget: 'commonjs2',
        // umdNamedDefine: true,
        library: "QComponents",
    },
    // target: 'node',
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: "style!css"
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    // externals: nodeModules
};
