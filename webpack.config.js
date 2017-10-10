const path = require('path');

const PATHS = {
  entry: path.join(__dirname, 'src', 'index.js'),
  public: path.join(__dirname, 'public'),
  src: path.join(__dirname, 'src')
};

module.exports = {
  // the initial file at the head of your project tree which loads in all other files and dependencies
  entry: PATHS.entry,
  // the name of the bundle file you want to create
  output: {
    // the name of the bundle file you want to create
    filename: 'bundle.js',
    // the absolute path for the output file
    path: PATHS.public,
    // the URL to the output directory relative to the index.html file. This specifies where any static files like CSS files are loaded from.
    publicPath: '/'
  },
  // enable line number preservation in console messages
  devtool: 'cheap-eval-source-map',
  // options for configuring modules
  module: {
    // define an array of rules for different modules
    rules: [
      // rules for transpiling JS files with babel-loader
      {
        test: /\.js$/,
        include: PATHS.src,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  // serve project with a development server
  devServer: {
    // the absolute path where any static content such as the index.html page should be loaded from
    contentBase: PATHS.public,
    // the place where the bundle (produced in memory) should be served from
    publicPath: '/',
    // the port you want your project to run on
    port: 9000
  }
}
