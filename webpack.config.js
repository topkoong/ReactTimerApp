// __dirname = gives a path to the current folder
var  webpack = require('webpack');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],// this tells the webpack where it should start processing your code.
  externals: {
    jquery: 'jQuery' // let foundation properly attached its methods onto Jquery obj
  },
  plugins: [
    new webpack.ProvidePlugin({
      // objs are key-value pairs
      // key is the variable name to watch for
      // the value is the module to replace it with
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      applicationStyles: 'app/styles/app.scss',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx'
    },
    // list of file extensions we wanna process
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] //compile our code from react and es2015
        },
        test: /\.jsx?$/, //regular expression matches any files that has .jsx
        exclude: /(node_modules|bower_components)/ //which folders we wanna ignore
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
