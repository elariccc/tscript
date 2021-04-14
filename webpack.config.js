module.exports = {
  entry: __dirname+'/src/index.tsx',
  output: {
    path: __dirname+'/src/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};