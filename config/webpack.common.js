const HtmlWebpackPlugin  = require('html-webpack-plugin');
const helper = require('./helpers');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports =  {
    entry: {
        app : "./src/js/index.js"
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': 'vue/dist/vue.runtime.min.js',
            '@': helper.root('src')
          }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['app']
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ helper.root('src') ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [ 
                    helper.root('src/js')
                ], 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
           },
        ], 
    }
    
};