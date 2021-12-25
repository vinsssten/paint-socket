const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: true,
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
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader", "css-loader"
                    ]
                    },
                {
                    test: /\.(png|jpg|svg|otf|ttf|ico)$/,
                    use: 'file-loader'
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
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
    }
}