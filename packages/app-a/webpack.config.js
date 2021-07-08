const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index',
    devtool: 'source-map',
    output: {
        publicPath: 'auto'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx'
                }
            },
            {
                test: /\.js?/,
                loader: 'esbuild-loader'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app_a',
            filename: 'remoteEntry.js',
            exposes: {
                './Button': './src/components/Button',
                './Panel': './src/components/Panel'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebpackPlugin(),
    ],
}