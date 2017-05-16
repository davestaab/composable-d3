const path = require('path');

module.exports = {
  // click on the name of the option to get to the detailed documentation
  // click on the items with arrows to show more examples / advanced options
  entry: './src/index.js',

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "build.js", // string
    // the filename template for entry chunks

    publicPath: "/dist/", // string
    // the url to the output directory resolved relative to the HTML page

    library: "composableD3", // string,
    // the name of the exported library

    libraryTarget: "umd", // universal module definition
    // the type of the exported library

  },
  devServer: {

    // contentBase: path.resolve(__dirname, "dist"), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
    // ...
  },
}
