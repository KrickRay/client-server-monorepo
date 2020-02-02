/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "template.html"
        }),
        new webpack.NamedModulesPlugin()
    ],
    stats: "minimal"
};
