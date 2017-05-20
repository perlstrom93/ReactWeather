var path = require('path'),
    currentFolder = path.resolve('./');

var config = {
    entry: currentFolder + '/app/app.jsx',

    output: {
        path: currentFolder + '/public/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        contentBase: './public'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },

    resolve: {
        modules: [
            currentFolder,
            "node_modules"
        ],
        alias: {
            Main: 'app/components/main.jsx',
            Nav: 'app/components/nav.jsx',
            Weather: 'app/components/weather.jsx',
            About: 'app/components/about.jsx',
            Examples: 'app/components/examples.jsx',
            OpenWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}

module.exports = config;
