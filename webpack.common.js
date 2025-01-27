const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Importa CopyWebpackPlugin
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  entry: {
    app: path.resolve(__dirname, "./src/App.tsx"),
    appStyles: path.resolve(__dirname, "./src/styles.scss"),
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash][ext]", // Guarda las imágenes en una carpeta "img" dentro de "dist"
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
    devMiddleware: {
      stats: "errors-only",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      scriptLoading: "blocking",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/img"), // Carpeta de origen
          to: path.resolve(__dirname, "./dist/img"), // Carpeta de destino
        },
      ],
    }),
  ],
};
