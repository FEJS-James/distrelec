const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const helper = require('./helpers');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: helper.root('dist'),
        filename: "js/[name].[hash].js",
        chunkFilename: 'js/[name].[hash].js'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/style.[hash].css'
        }),
        // new CopyPlugin([
        //     { from: './src/assets/', to: './assets/' }, 
        // ]), 
    ],
    module: {
        rules: [ 
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { sourceMap: false } },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-preset-env')(),
                            require('postcss-discard-comments')({ removeAll: true }),
                            require('cssnano')(),
                            require('autoprefixer')
                        ]
                    }
                },
                { loader: 'sass-loader', options: { sourceMap: false } }
              ]
            },
        ]
    }

});