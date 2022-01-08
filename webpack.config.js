const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: true,
        favicon: './public/icons/icon.ico',
    }),
    new MiniCssExtractPlugin({
        filename: 'main.[contenthash:5].css'
    })
]

module.exports = (argv) => {
    const devMode = argv.mode == 'development';
    return {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? 'source-map' : false,
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.[contenthash:5].js'
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components|server)/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '',
                        },
                      },
                      {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                          modules: {
                            localIdentName: devMode
                              ? '[path][name]__[local]--[hash:base64:5]'
                              : '[hash:base64]',
                          },
                        },
                      },
                      'sass-loader',
                    ],
                },
                {
                    test: /\.(otf|ttf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[hash][ext][query]'
                    }
                }, 
                {
                    test: /\.(png|jpg|svg|ico)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'icons/[hash][ext][query]'
                    }
                }
            ]
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx'
            ]
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'build'),
            },
            compress: true,
            port: 5000,
            open: true,
            historyApiFallback: true,
        },
    }
}