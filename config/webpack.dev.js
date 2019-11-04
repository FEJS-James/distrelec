const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [ 
        new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap: true } },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-preset-env')(),
                            require('postcss-discard-comments')({ removeAll: true }),
                            require('autoprefixer')
                        ],
                        sourceMap: true
                    }
                },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
            },
        ]
    }

});