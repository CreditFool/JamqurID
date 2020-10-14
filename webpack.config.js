const path = require("path");
const ASSET_PATH = process.env.ASSET_PATH || '/';
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: ASSET_PATH,
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    ]
}