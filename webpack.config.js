var bundler = require("nativescript-dev-webpack");

var conf = {
    debug: true,
    module: {
        loaders: [
            {
                match: /\.html$/,
                loader: 'html'
            }
        ]
    }
};


var config = bundler.getConfig(conf);
console.log(JSON.stringify(config, null, 4));
module.exports = config;

var path = require("path");
var webpack = require("webpack");

/*

console.log('PROJECT_DIR: ' + process.env.PROJECT_DIR);

module.exports = {
    //context: "./platforms/android/src/main/assets/app",
    context: process.env.PROJECT_DIR,
    entry: {
        app: "./app",
    },
    output: {
        path: __dirname,
        pathinfo: true,
        libraryTarget: "commonjs2",
        filename: "bundle.js"
    },
    externals: [
        function(context, request, callback) {
            if (/browserify|crypto/.test(request)) {
                return callback(null, "var {}");
            } else {
                callback();
            }
        }
    ],
    resolve: {
        extensions: ["", ".js"],
        packageMains: ["main"],
        modulesDirectories: [
            "tns_modules",
        ]
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            global: 'global',
            __dirname: '__dirname'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
};
*/
