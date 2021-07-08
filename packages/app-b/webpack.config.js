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
            name: 'app_b',
            filename: 'remoteEntry.js',
            remotes: {
                app_a: 'app_a@http://localhost:3001/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebpackPlugin() 
    ],
}