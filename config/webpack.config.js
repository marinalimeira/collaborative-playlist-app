module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /.js$/, loader: 'babel' }
    ]
  }
}
